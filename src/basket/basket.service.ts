import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { AddProductToBasketResponse, RemoveProductFromBasketResponse, GetBasketResponse, GetTotalBasketPriceRespone } from 'src/interface/basket';
import { ShopItem } from 'src/shop/shop-item.entity';
import { ShopService } from 'src/shop/shop.service';
import { UserService } from 'src/user/user.service';
import { AddProductDto } from './dto/add-product.dto';
import { ItemInBasket } from './item-in-basket.entity';
import {User} from "../user/user.entity";


@Injectable()
export class BasketService {

    constructor(
        @Inject(forwardRef( () => ShopService)) private shopService: ShopService,
        @Inject(UserService) private userService: UserService,
    ) {

    }


    async add(product: AddProductDto, user: User): Promise<AddProductToBasketResponse> {
       
        const { productId  } = product;

        const shopItem = await this.shopService.getOneItem(productId); 
        if (
            typeof productId !== 'string'
            ||
            productId === ''
            ||
            !shopItem
            ||
            productId === shopItem.id
        ) {
            return {
                isSuccess: false,
            };
        }

        const item = new ItemInBasket();
        
        await item.save();

        item.shopItem = shopItem;
        item.user = user;
        await item.save();

        return {
            isSuccess: true,
            id: item.id,
        };
    } 
    //  Dokończyć usuwanie pojedyńczego elementu ( prawdopodobnie problem z //  zapytaniem sql)

    async remove(itemInBasketId: string, userId: string): Promise<RemoveProductFromBasketResponse> {

        const user = await this.userService.getOneUser(userId);

        if (!user) {
            throw new Error('User not found!');
        }
       
        const item = await ItemInBasket.findOne({
            where: {
                id: itemInBasketId,
                user,
            },
        });
        
        if (item) {
            await item.remove();
            return {
                isSuccess: true,
            };
        }
        return {
            isSuccess: false,
        };
    }

    async getAllForUser(userId: string): Promise<ItemInBasket[]> {
        const user = await this.userService.getOneUser(userId);

        if (!user) {
            throw new Error('User not found!');
        }

        return  ItemInBasket.find({
            where: {
                user,
            },
            relations: ['shopItem'],
            // Może pomóc przy remove()
        });
    }

    async clearBasket(userId: string) {
        const user = await this.userService.getOneUser(userId);

        if (!user) {
            throw new Error('User not found!');
        }

        await ItemInBasket.delete({
            user,
        });
    }

    async getTotalPrice(userId: string): Promise<GetTotalBasketPriceRespone> {
        const items = await this.getAllForUser (userId);

        return (await Promise.all(items.map(async item => item.shopItem.price))).reduce((prev, curr) => prev + curr, 0);
    
    }

    async getAllForAdmin(): Promise<ItemInBasket[]> {
        
        return ItemInBasket.find({
            relations: ['shopItem', 'user'],
        })

    }

}

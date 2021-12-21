import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { ShopItem } from './shop-item.entity';
import { BasketService } from 'src/basket/basket.service';
import { AddNewProductDto } from './dto/add-new-product.dto';
import { AddNewProductResponse } from 'src/interface/shop';



@Injectable()
export class ShopService {
    constructor(
        @Inject(forwardRef( () => BasketService)) private basketService: BasketService,
    ){
        
    }

    async getItems(): Promise<ShopItem[]> {
        return ShopItem.find();
    }

    async hasItem(name: string): Promise<boolean> {
        return (await this.getItems()).some(item => item.name === name);
    }

    async getPrice(name: string): Promise<number> {
        return (await this.getItems())
        .find(item => item.name === name).price
    }

    async getOneItem(id: string): Promise<ShopItem> {
        return await ShopItem.findOne(id);
    }


//      W przyszłości dodać funkcję dodawania nowego produktu z poziomu storny
//     async add(product: AddNewProductDto ): Promise<AddNewProductResponse> {
//         return ;
//     }
}

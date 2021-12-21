import { Body, Controller, Delete, Get, Inject, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserObj } from 'src/decorators/user-obj.decorator';
import { AddProductToBasketResponse, GetTotalBasketPriceRespone, RemoveProductFromBasketResponse, GetBasketResponse } from 'src/interface/basket';
import { User } from 'src/user/user.entity';
import { BasketService } from './basket.service';
import { AddProductDto } from './dto/add-product.dto';

@Controller('basket')
export class BasketController {
    constructor(
        @Inject(BasketService) private basketService: BasketService,
    ){

    }

    @Post('/')
    @UseGuards(AuthGuard('jwt'))
    addProductToBasket(
        @Body() product: AddProductDto,
        @UserObj() user: User,
    ): Promise<AddProductToBasketResponse> {
        return this.basketService.add(product, user);
    }

    @Delete('/remove/all/:userId')
    clearBasket(
        @Param('userId') userId: string,
    ) {
        this.basketService.clearBasket(userId);
    }

    // Do dokończenia, patrz - basket.service l-50

    @Delete('/remove/:itemInBasketId/:userId')
    removeProduct(
        @Param('itemInBasketId') itemInBasketId: string,
        @Param('userId') userId: string,
    ): Promise<RemoveProductFromBasketResponse> {
        console.log(typeof(itemInBasketId));
        return this.basketService.remove(itemInBasketId, userId);
    }

    @Get('/all/:userId')
    getBasket(
        @Param('userId') userId: string,
    ): Promise<GetBasketResponse> {
        return this.basketService.getAllForUser(userId);
    }

    @Get('total-price/:userId')
    getTotalBasketPrice(
        @Param('userId') userId: string,
    ): Promise<GetTotalBasketPriceRespone> {
        return this.basketService.getTotalPrice(userId);
    }

    @Get('/admin')
    getBasketForAdmin(): Promise<GetBasketResponse> {
        return this.basketService.getAllForAdmin();
    }

    
}

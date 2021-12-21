import { Controller, Get, Inject, Post, Body, Param, ParseIntPipe, HttpStatus, DefaultValuePipe, ImATeapotException } from '@nestjs/common';
import { ShopItemInterface, AddNewProductResponse } from 'src/interface/shop';
import { CheckAgePipe } from 'src/pipes/check-age.pipe';
import { AddNewProductDto } from './dto/add-new-product.dto';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
    constructor(
        @Inject(ShopService) private shopService: ShopService,
    ){

    }

    @Get('/')
    getShopList(): Promise<ShopItemInterface[]> {
        return this.shopService.getItems();
    }

   

//  Patrz szhop.service linia - 35
    // @Post('/add')
    // addNewProduct(
    //     @Body() product: AddNewProductDto,
    // ): Promise<AddNewProductResponse> {
    //     return this.shopService.add(product);
    // }


}

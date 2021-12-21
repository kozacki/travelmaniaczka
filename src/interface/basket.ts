
import { AddProductDto } from "src/basket/dto/add-product.dto";

export type AddProductToBasketResponse = {
    isSuccess: true;
    id: string;
} | {
    isSuccess: false,
};


export interface RemoveProductFromBasketResponse {
    isSuccess: boolean;
}

interface OneItemInBasket {
    id: string;
}


export type GetBasketResponse = OneItemInBasket[];

export type GetTotalBasketPriceRespone = number;




// export type GetTotalPriceResponse = number | {
//     isSuccess: false;
//     alternativeBasket: AddProductDto[];
// };

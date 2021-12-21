export interface ShopItemInterface {
    name: string;
    description: string;
    price: number;
} 

export type AddNewProductResponse = {
    isSuccess: true;
    id: string;
    name: string;
} | {
    isSuccess: false,
};
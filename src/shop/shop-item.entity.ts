import { ItemInBasket } from 'src/basket/item-in-basket.entity';
import { ShopItemInterface } from 'src/interface/shop';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class ShopItem extends BaseEntity implements ShopItemInterface {
 

    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 40,
    })
    name: string;
  
    @Column()
    description: string;

    @Column({
        type: 'float',
        precision: 7,
        scale: 2,
    })
    price: number;

    @Column({
        default: null,
        nullable: true,
    })
    photoFn: string;

    @OneToMany(type => ItemInBasket, entity => entity.shopItem)
    itemsInBasket: ItemInBasket[];


}
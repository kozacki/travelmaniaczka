import { ShopItem } from 'src/shop/shop-item.entity';
import { User } from 'src/user/user.entity';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { AddProductDto } from './dto/add-product.dto';

@Entity() 
export class ItemInBasket extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    // @Column()
    // count: number = 1;

    @ManyToOne(type => ShopItem, entity => entity.itemsInBasket)
    @JoinColumn()
    shopItem: ShopItem; 

    @ManyToOne(type => User, entity => entity.itemsInBasket)
    @JoinColumn()
    user: User;

    
}
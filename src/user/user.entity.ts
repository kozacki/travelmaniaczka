import { type } from "os";
import { ItemInBasket } from "src/basket/item-in-basket.entity";
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity() 
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 40
    })
    firstName: string;


    @Column({
        length: 255,
    })
    email: string;

    @Column()
    pwdHash: string;

    @Column({
        nullable: true,
        default: null,
    })
    currentTokenId: string | null;

    @OneToMany(type => ItemInBasket, entity => entity.user)
    itemsInBasket: ItemInBasket[];

}

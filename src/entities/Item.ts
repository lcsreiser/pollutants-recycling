import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";
import { Category } from "./Category";
import { History } from "./History";
import { User } from "./User";

@Entity("items")
export class Item {

    @PrimaryGeneratedColumn("uuid")
    itemId?: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    quantity: number;

    @ManyToOne(() => Category, (category) => category.items, {eager: true})
    category: Category;

    @ManyToOne(() => User, (user) => user.items)
    owner: User;

    @OneToOne(() => History , (history) => history.item)
    histories: History[];

}
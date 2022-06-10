import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./Item";


@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn("uuid")
    categoryId?: string;

    @Column({unique: true})
    name: string;

    @Column()
    unit: string;

    @Column()
    description: string;
    
    @OneToMany(() => Item, (item) => item.category)
    items: Item[];

}
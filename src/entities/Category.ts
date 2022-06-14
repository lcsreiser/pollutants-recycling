import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DumpSpot } from "./DumpSpot";
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

    @ManyToMany(()=> DumpSpot, (dumpSpot)=> dumpSpot.categories)
    dumpspots: DumpSpot[];

}
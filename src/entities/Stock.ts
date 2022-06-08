import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { DumpSpot } from "./DumpSpot";

@Entity("stocks")
export class Stock {
    @PrimaryGeneratedColumn("uuid")
    stockId: string;

    @Column()
    quantity: number;

    @ManyToOne(() => Category, (category) => category.stocks)
    category: Category;

    @ManyToOne(() => DumpSpot, (dumpSpot) => dumpSpot.stocks)
    dumpSpot: DumpSpot;
}
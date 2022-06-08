import { Column, Entity,ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { DumpSpot } from "./DumpSpot";
import { Item } from "./Item";
import { User } from "./User";

@Entity("transactionsCollect")
export class TransactionsCollect {
    @PrimaryGeneratedColumn("uuid")
    transCollectId?: string;

    @Column()
    date: Date;

    @ManyToOne(() => Item, (item) => item.collects)
    item: Item;

    @ManyToOne(() => DumpSpot, (dumpSpot) => dumpSpot.collects)
    provider: DumpSpot;

    @ManyToOne(() => User, (user) => user.collects)
    collector: User;

}
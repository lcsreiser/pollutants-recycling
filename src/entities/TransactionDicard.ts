import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DumpSpot } from "./DumpSpot";
import { Item } from "./Item";
import { User } from "./User";

@Entity("transactionsDiscard")
export class TransactionsDiscard {
    @PrimaryGeneratedColumn("uuid")
    transDiscardId?: string;

    @Column()
    date: Date;

    @ManyToOne(() => Item, (item) => item.discards)
    item: Item;

    @ManyToOne(() => User, (user) => user.discards)
    provider: User;

    @ManyToOne(() => DumpSpot, (dumpSpot) => dumpSpot.discard)
    collector: DumpSpot;
}
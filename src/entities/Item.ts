import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Category } from "./Category";
import { compare } from "bcrypt";
import { User } from "./User";
import { DumpSpot } from "./DumpSpot";
import { TransactionsCollect } from "./TransactionsCollect";
import { TransactionsDiscard } from "./TransactionDicard";

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

    @ManyToOne(() => Category, (category) => category.items)
    category: Category;

    @ManyToOne(() => User, (user) => user.items)
    owner?: User;

    @ManyToOne(() => DumpSpot, (dumpSpot) => dumpSpot.items)
    dumpSpot?: DumpSpot;

    @OneToMany(() => TransactionsCollect, (transactionsCollect) => transactionsCollect.item)
    collects: TransactionsCollect[];

    @OneToMany(() => TransactionsDiscard, (transactionsDiscard) => transactionsDiscard.item)
    discards: TransactionsDiscard[];
}
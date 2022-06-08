import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";
import { Item } from "./Item";
import { Stock } from "./Stock";
import { TransactionsDiscard } from "./TransactionDicard";
import { TransactionsCollect } from "./TransactionsCollect";


@Entity("dumpSpots")
export class DumpSpot {
    @PrimaryGeneratedColumn("uuid")
    dumpSpot_id?: string;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => TransactionsCollect, (transactionsCollect) => transactionsCollect.provider)
    collects: TransactionsCollect;

    @OneToMany(() => TransactionsDiscard, (transactionsDiscard) => transactionsDiscard.collector)
    discard: TransactionsDiscard[];

    @OneToMany(() => Item, (item) => item.dumpSpot)
    items: Item[];

    @OneToMany(() => Stock, (stock) => stock.dumpSpot)
    stocks: Stock[];

    @OneToOne(() => Address, (address)=> address)
    @JoinColumn()
    address: Address;
}
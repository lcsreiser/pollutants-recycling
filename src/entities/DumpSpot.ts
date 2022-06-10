import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";
import { Item } from "./Item";
import { Stock } from "./Stock";
import { TransactionsCollect } from "./TransactionsCollect";


@Entity("dumpSpots")
export class DumpSpot {
    @PrimaryGeneratedColumn("uuid")
    dumpSpot_id?: string;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Item, (item) => item.dumpSpot)
    items: Item[];

    @OneToOne(() => Address, (address)=> address)
    @JoinColumn()
    address: Address;
}
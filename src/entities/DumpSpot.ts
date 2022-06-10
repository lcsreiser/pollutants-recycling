import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";
import { History } from "./History";


@Entity("dumpSpots")
export class  DumpSpot {
    @PrimaryGeneratedColumn("uuid")
    dumpSpot_id?: string;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => History, (history) => history.dumpSpot)
    histories: History[];
 
    @OneToOne(() => Address, (address)=> address)
    @JoinColumn()
    address: Address;
}
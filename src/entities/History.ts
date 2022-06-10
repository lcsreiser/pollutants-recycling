import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
import { DumpSpot } from "./DumpSpot";
import { Item } from "./Item";
import { User } from "./User";

@Entity("histories")
export class History {
    @PrimaryGeneratedColumn("uuid")
    history_id: string;

    @CreateDateColumn()
    date: Date;

    @OneToOne(()=>Item, (item)=> item.histories)
    @JoinColumn()
    item: string;

    @ManyToOne(() => User, (user) => user.histories)
    provider: User;

    @ManyToOne(() => DumpSpot, (dumpSpot) => dumpSpot.histories)
    dumpSpot?: DumpSpot;

    @ManyToOne(() => User, (user) => user.histories)
    userCollector?: DumpSpot;
}
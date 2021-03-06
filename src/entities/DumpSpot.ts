import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./Address";
import { Category } from "./Category";
import { History } from "./History";

@Entity("dumpSpots")
export class DumpSpot {
  @PrimaryGeneratedColumn("uuid")
  dumpSpot_id?: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => History, (history) => history.dumpSpot)
  histories: History[];

  @OneToOne(() => Address, (address) => address, { eager: true })
  @JoinColumn()
  address: Address;

  @ManyToMany(() => Category, (category) => category.dumpspots, { eager: true })
  @JoinTable()
  categories: Category[];
}

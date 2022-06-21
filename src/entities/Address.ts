import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  addressId?: string;

  @Column()
  zipCode: string;

  @Column()
  street: string;

  @Column()
  complement: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  number: number;

  @Column({ type: "float" })
  latitude: number;

  @Column({ type: "float" })
  longitude: number;

  @Column({ default: false })
  isDumpSpot: boolean;

  @OneToOne(() => User, (user) => user.address)
  user: User;
}

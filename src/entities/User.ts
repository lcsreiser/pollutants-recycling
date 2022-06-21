import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Address } from "./Address";
import { compare } from "bcrypt";
import { Item } from "./Item";
import { History } from "./History";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  userId?: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Address, (address) => address.user, { eager: true })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Item, (item) => item.owner)
  items: Item[];

  @OneToMany(() => History, (history) => history.provider)
  histories: History[];

  comparePwd = async (pwdString: string): Promise<boolean> => {
    return await compare(pwdString, this.password);
  };
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Address } from "./Address";
import { compare } from "bcrypt";
import { TransactionsDiscard } from "./TransactionDicard";
import { TransactionsCollect } from "./TransactionsCollect";
import { Item } from "./Item";

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

    @OneToOne(() => Address, (address) => address.user)
    @JoinColumn()
    address: Address;

    @OneToMany(() => Item, (item) => item.owner)
    items: Item[];

    @OneToMany(() => TransactionsDiscard, (transactionsDiscard) => transactionsDiscard.provider)
    discards: TransactionsDiscard[];
    
    @OneToMany(() => TransactionsCollect, (transactionsCollect) => transactionsCollect.collector )
    collects: TransactionsCollect[];

    comparePwd = async (pwdString: string): Promise<boolean> => {
        return await compare(pwdString, this.password);
    }
}
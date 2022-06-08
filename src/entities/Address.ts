import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToOne } from "typeorm"
import { User } from "./User";

@Entity("addresses")
export class Address {

    @PrimaryGeneratedColumn("uuid")
    addressId?: string;

    @Column()
    zipCode: string;

    @Column()
    complement: string;

    @Column()
    number: number;

    @Column({ default: false })
    isDumpSpot: boolean;

    @OneToOne(() => User, (user) => user.address)
    user: User;

}

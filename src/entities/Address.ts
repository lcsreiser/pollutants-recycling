import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToOne } from "typeorm"
import { User } from "./User";

@Entity("addresses")
export class  Address {

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
    number: number;

    @Column()
    latitude: number;

    @Column()
    longitude: string;

    @Column({ default: false })
    isDumpSpot: boolean;

    @OneToOne(() => User, (user) => user.address)
    user: User;

}

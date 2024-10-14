import { 
    Column,
    Entity, 
    PrimaryGeneratedColumn 
} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:  number;

    @Column()
    fullname: String;

    @Column({unique : true})
    email: String;

}

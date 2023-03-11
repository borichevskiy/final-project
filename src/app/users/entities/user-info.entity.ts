import { Entity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { UUIDEntity } from "src/shared/entities/uuid.entity";
import  {UserEntity} from "./users.entity";

@Entity({ name: "user_info"})
export class UserInfoEntity {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column({ name: "first_name" })
  firstName!: string;

  @Column({ name: "last_name" })
  lastName!: string;


  @Column({name: "phone"})
  phone: string;

  @Column({name: "address"})
  address: string;

}
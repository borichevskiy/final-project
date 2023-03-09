import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserInfoEntity } from "./user-info.entity";
import { UserRoleEntity } from "../../roles/entities/user-role.entity";
import { CartEntity } from "../../cart/entities/cart.entity";
import { OrdersEntity } from "../../orders/entities/orders.entity";
import { RatingEntity } from "../../rating/entities/rating.entity";

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @Column({default: false})
  banned: boolean;

  @Column({default: ''})
  banReason: string;

  @OneToOne(() => UserInfoEntity)
  @JoinColumn()
  userInfo?: UserInfoEntity;

  @OneToOne(() => CartEntity)
  @JoinColumn()
  cart: CartEntity;


  @ManyToOne(() => UserRoleEntity)
  userRole?: UserRoleEntity;

  @OneToMany(() => OrdersEntity, order => order.user)
  orders?: OrdersEntity[];

}
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
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

  @Column({ select: false, nullable: true, name: 'refresh_token' })
  refreshToken: string;

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

  @BeforeInsert()
  async hashPassword() {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

}
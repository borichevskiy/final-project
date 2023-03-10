import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserInfoEntity } from "./user-info.entity";
import { UserRoleEntity } from "../../roles/entities/user-role.entity";
import { CartEntity } from "../../cart/entities/cart.entity";
import { OrdersEntity } from "../../orders/entities/orders.entity";
import { UUIDEntity } from "src/shared/entities/uuid.entity";
import { UserRoleTypes } from "src/app/roles/enums/user-role-types.enum";

@Entity('users')
export class UserEntity extends UUIDEntity {

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({default: false})
  banned?: boolean;

  @Column({default: ''})
  banReason?: string;

  @Column({ name: "role_type" })
  roleType?: UserRoleTypes;

  @Column({ name: "role_id" })
  roleId?: number;

  @ManyToOne(() => UserRoleEntity)
  @JoinColumn({ name: "role_id", referencedColumnName: "id" })
  userRole?: UserRoleEntity;

  @OneToOne(() => UserInfoEntity)
  @JoinColumn()
  userInfo?: UserInfoEntity;

  @OneToOne(() => CartEntity)
  @JoinColumn()
  cart?: CartEntity;

  @OneToMany(() => OrdersEntity, order => order.user)
  orders?: OrdersEntity[];
}
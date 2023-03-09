import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


import { IDEntity } from "src/shared/entities/id.entity";

import { UserRoleTypes } from "../enums/user-role-types.enum";
import { UserPermissions } from "../enums/user-permissions.enum";
import { UserEntity } from "../../users/entities/users.entity";
import { OrdersEntity } from "../../orders/entities/orders.entity";

@Entity({ name: "user_roles" })
export class UserRoleEntity extends IDEntity {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column({ name: "type", enum: UserRoleTypes })
  type: UserRoleTypes;

  @Column({ name: "name" })
  name: string;

  @Column("text", { name: "permissions", array: true, })
  permissions: UserPermissions[]

  @OneToMany(() => UserEntity, user => user.userRole)
  users?: UserEntity[];


}

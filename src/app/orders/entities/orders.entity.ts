import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne
} from "typeorm";

import { UserRoleEntity } from "../../roles/entities/user-role.entity";
import { ProductsEntity } from "../../products/entities/products.entity";
import { UUIDEntity } from '../../../shared/entities/uuid.entity';

@Entity('orders')
export class OrdersEntity extends UUIDEntity{

  @Column({name: 'name'})
  name: string;

  @Column({name: 'totalPrice'})
  totalPrice: number;

  @ManyToOne(() => UserRoleEntity)
  user?: UserRoleEntity;

  @ManyToMany(() => ProductsEntity, (product) => product.orders)
  @JoinTable()
  products: ProductsEntity[];

}
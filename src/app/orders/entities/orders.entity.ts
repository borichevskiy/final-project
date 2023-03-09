import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { CartEntity } from "../../cart/entities/cart.entity";
import { UserRoleEntity } from "../../roles/entities/user-role.entity";
import { ProductsEntity } from "../../products/entities/products.entity";

@Entity('orders')
export class OrdersEntity {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column({name: 'name'})
  name: string;

  @Column({name: 'createdAt'})
  createdAt: Date;

  @Column({name: 'modifiedAt'})
  modifiedAt: Date;

  @Column({name: 'totalPrice'})
  totalPrice: number;

  @ManyToOne(() => UserRoleEntity)
  user?: UserRoleEntity;

  @ManyToMany(() => ProductsEntity, (product) => product.orders)
  @JoinTable()
  products: ProductsEntity[];

}
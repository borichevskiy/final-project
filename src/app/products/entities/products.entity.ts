import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";

import { CartEntity } from "../../cart/entities/cart.entity";
import { OrdersEntity } from "../../orders/entities/orders.entity";
import { CategoryEntity } from "../../categories/entities/category.entity";
import { BrandEntity } from "../../brand/entities/brand.entity";
import { RatingEntity } from "../../rating/entities/rating.entity";

@Entity('products')
export class ProductsEntity {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column({name: 'name'})
  name: string;

  @Column({default: ''})
  image: string

  @Column({name: 'price'})
  price: number;

  @Column({name: 'description'})
  description: string;

  @Column({name: 'quantity'})
  quantity: number;

  @ManyToMany(() => CartEntity, (cart) => cart.products)
  cart: CartEntity[];


  @ManyToMany(() => OrdersEntity, (order) => order.products)
  orders: OrdersEntity[];


  @ManyToOne(() => ProductsEntity)
  category?: CategoryEntity;

  @ManyToOne(() => BrandEntity)
  brand?: BrandEntity;

  @OneToMany(() => RatingEntity, rating => rating.product)
  ratings?: RatingEntity[];




}
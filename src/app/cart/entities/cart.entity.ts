import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductsEntity } from "../../products/entities/products.entity";
import { UserEntity } from "../../users/entities/users.entity";

@Entity("carts")
export class CartEntity {
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column({name: 'totalPrice'})
  totalPrice: number;

  @ManyToMany(() => ProductsEntity, (product) => product.cart)
  @JoinTable()
  products: ProductsEntity[];
}
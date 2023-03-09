import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrdersEntity } from "../../orders/entities/orders.entity";
import { ProductsEntity } from "../../products/entities/products.entity";
import { BrandEntity } from "../../brand/entities/brand.entity";

@Entity("categories")
export class CategoryEntity{
  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column({name: 'name'})
  name: string;

  @Column({name: 'description'})
  description: string;

  @OneToMany(() => ProductsEntity, product => product.category)
  products?: ProductsEntity[];


  @ManyToMany(() => BrandEntity, (brand) => brand.categories)
  brands: BrandEntity[];

}
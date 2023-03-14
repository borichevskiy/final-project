import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductsEntity } from "../../products/entities/products.entity";
import { CategoryEntity } from "../../categories/entities/category.entity";
import { IDEntity } from '../../../shared/entities/id.entity';

@Entity('brands')
export class BrandEntity extends IDEntity{

  @Column({name: 'name'})
  name: string;

  @OneToMany(() => ProductsEntity, product => product.brand)
  products?: ProductsEntity[];

  @ManyToMany(() => CategoryEntity, (category) => category.brands)
  @JoinTable()
  categories: CategoryEntity[];

 }

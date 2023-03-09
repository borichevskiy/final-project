import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BrandEntity } from "../../brand/entities/brand.entity";
import { ProductsEntity } from "../../products/entities/products.entity";
import { UserEntity } from "../../users/entities/users.entity";

@Entity('ratings')
export class RatingEntity {

  @PrimaryGeneratedColumn({type: "bigint"})
  id: number;

  @Column({name: 'rate'})
  rate: number;

  @ManyToOne(() => ProductsEntity)
  product?: ProductsEntity;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity;
}
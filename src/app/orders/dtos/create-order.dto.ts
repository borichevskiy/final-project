import { ProductsEntity } from '../../products/entities/products.entity';

export class CreateOrderDto {
  readonly name: string;

  readonly products: ProductsEntity[];

  readonly userId: string;
}
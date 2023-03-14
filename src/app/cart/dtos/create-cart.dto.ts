import { ProductsEntity } from '../../products/entities/products.entity';

export class CreateCartDto {
  readonly userId: string;
  readonly products: ProductsEntity[];
}
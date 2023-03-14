import { ProductsEntity } from '../../products/entities/products.entity';

export class AddProductsDto {
  brandId: number;
  products: ProductsEntity[];
}
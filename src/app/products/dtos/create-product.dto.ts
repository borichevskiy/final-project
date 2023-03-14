import { BrandEntity } from '../../brand/entities/brand.entity';
import { CategoryEntity } from '../../categories/entities/category.entity';

export class CreateProductDto {
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly quantity: number;
  readonly brand?: BrandEntity
  readonly category?: CategoryEntity;
}
import { CategoryEntity } from '../../categories/entities/category.entity';

export class CreateBrandDto {
  readonly name: string;
  readonly categories: CategoryEntity[];
}
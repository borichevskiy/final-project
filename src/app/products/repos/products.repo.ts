import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsEntity } from '../entities/products.entity';

export class ProductsRepo extends Repository<ProductsEntity> {
  constructor(
    @InjectRepository(ProductsEntity)
    repository: Repository<ProductsEntity>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async getProductById(id: number) {
    return await this.findOne({
      where: { id },
      relations: ['cart', 'orders', 'category', 'brand', 'ratings'],
    });
  }

  async getAllProducts() {
    return await this.find({relations: ['cart', 'orders', 'category', 'brand', 'ratings']});
  }
}

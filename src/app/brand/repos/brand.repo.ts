import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BrandEntity } from './../entities/brand.entity';

export class BrandRepo extends Repository<BrandEntity> {
  constructor(
    @InjectRepository(BrandEntity)
    repository: Repository<BrandEntity>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async getBrandById(id: number) {
    return await this.findOne({
      where: { id },
      relations: ['products', 'categories'],
    });
  }

  async getAllBrands() {
    return await this.find({
      relations: ['products', 'categories'],
    });
  }
}
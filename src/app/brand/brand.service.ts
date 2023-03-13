import { Injectable } from '@nestjs/common';
import { BrandRepo } from './repos/brand.repo';

import { CreateBrandDto } from './dtos/create-brand.dto';

@Injectable()
export class BrandService {
  constructor(private readonly brandRepository: BrandRepo) {}

  async getBrandById(id: number) {
    return await this.brandRepository.getBrandById(id);
  }

  async getAllBrands() {
    return await this.brandRepository.getAllBrands();
  }

  async createBrand(dto: CreateBrandDto) {
    const newBrand = this.brandRepository.create({
      ...dto,
    });
    return await this.brandRepository.save(newBrand);
  }
}

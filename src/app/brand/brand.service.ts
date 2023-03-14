import { Injectable } from '@nestjs/common';
import { BrandRepo } from './repos/brand.repo';

import { CreateBrandDto } from './dtos/create-brand.dto';
import { AddProductsDto } from './dtos/add-products.dto';
import { CreateUserDto } from '../users/dtos/create-user.dto';

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
      ...dto, created: new Date()
    });
    return await this.brandRepository.save(newBrand);
  }

  async addProducts(dto: AddProductsDto) {
    const brand = await this.brandRepository.getBrandById(dto.brandId);
    brand.products.push(...dto.products);
    return await this.brandRepository.save(brand);
  }

  public updateBrand(updateId: number, dto: CreateBrandDto) {
    return this.brandRepository.update(updateId, { ...dto, updated: new Date() });
  }

}

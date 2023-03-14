import { Injectable } from '@nestjs/common';

import { ProductsRepo } from './repos/products.repo';
import { CreateProductDto } from './dtos/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepo) {}

  async getProductById(id: string) {
    return await this.productsRepository.getProductById(id);
  }

  async getAllProducts() {
    return await this.productsRepository.getAllProducts();
  }

  async createProduct(dto: CreateProductDto) {
    const newProduct = this.productsRepository.create({
      ...dto
    });
      return await this.productsRepository.save(newProduct);
  }

  async updateProduct(updateId: number, dto: CreateProductDto) {
    return await this.productsRepository.update(updateId, {...dto, updated: new Date()});
  }

  async delete(id: number) {
    return await this.productsRepository.delete(id);
  }
} 

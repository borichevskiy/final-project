import { Injectable } from '@nestjs/common';

import { ProductsRepo } from './repos/products.repo';
import { CreateProductDto } from './dtos/create-product.dto';
import { FilesService } from '../files/files.service';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepo,
              private fileService: FilesService
              ) {}

  async getProductById(id: string) {
    return await this.productsRepository.getProductById(id);
  }

  async getAllProducts() {
    return await this.productsRepository.getAllProducts();
  }

  async createProduct(dto: CreateProductDto, image: any) {

    const fileName = await this.fileService.createFile(image);

    const newProduct = this.productsRepository.create({
      ...dto, image: fileName
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

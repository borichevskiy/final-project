import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsEntity } from "./entities/products.entity";
import { ProductsRepo } from './repos/products.repo';

@Module({
  providers: [ProductsService, ProductsRepo],
  controllers: [ProductsController],
  imports: [
  TypeOrmModule.forFeature([
        ProductsEntity
    ])
  ]
})
export class ProductsModule {}

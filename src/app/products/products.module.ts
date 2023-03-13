import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsEntity } from "./entities/products.entity";
import { FilesModule } from "../files/files.module";


@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
    FilesModule,
    TypeOrmModule.forFeature([
        ProductsEntity
    ])
  ]
})
export class ProductsModule {}

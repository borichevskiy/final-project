import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CategoryEntity } from "./entities/category.entity";


@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  imports: [
    TypeOrmModule.forFeature([
      CategoryEntity
    ])
  ]
})
export class CategoriesModule {}

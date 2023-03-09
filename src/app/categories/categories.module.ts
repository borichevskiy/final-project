import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';


@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  imports: [
    TypeOrmModule.forFeature([

    ])
  ]
})
export class CategoriesModule {}

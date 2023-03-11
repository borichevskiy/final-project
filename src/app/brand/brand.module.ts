import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { BrandEntity } from "./entities/brand.entity";


@Module({
  providers: [BrandService],
  controllers: [BrandController],
  imports: [
    TypeOrmModule.forFeature([
      BrandEntity
    ])
  ]
})
export class BrandModule {}

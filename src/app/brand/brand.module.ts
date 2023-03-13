import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { BrandEntity } from "./entities/brand.entity";
import { BrandRepo } from './repos/brand.repo';


@Module({
  providers: [BrandService, BrandRepo],
  controllers: [BrandController],
  imports: [TypeOrmModule.forFeature([BrandEntity])],
})
export class BrandModule {}

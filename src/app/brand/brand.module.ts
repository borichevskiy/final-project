import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';


@Module({
  providers: [BrandService],
  controllers: [BrandController],
  imports: [
    TypeOrmModule.forFeature([

    ])
  ]
})
export class BrandModule {}

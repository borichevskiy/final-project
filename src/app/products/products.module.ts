import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';


@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
    TypeOrmModule.forFeature([

    ])
  ]
})
export class ProductsModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartEntity } from "./entities/cart.entity";


@Module({
  providers: [CartService],
  controllers: [CartController],
  imports: [
    TypeOrmModule.forFeature([
        CartEntity
    ])
  ]
})
export class CartModule {}

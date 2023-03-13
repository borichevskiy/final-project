import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartEntity } from "./entities/cart.entity";
import { CartRepo } from "./repos/cart.repo";


@Module({
  providers: [CartService, CartRepo],
  controllers: [CartController],
  imports: [
    TypeOrmModule.forFeature([
        CartEntity
    ])
  ]
})
export class CartModule {}

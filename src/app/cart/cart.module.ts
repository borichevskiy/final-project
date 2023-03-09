import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { CartController } from './cart.controller';
import { CartService } from './cart.service';


@Module({
  providers: [CartService],
  controllers: [CartController],
  imports: [
    TypeOrmModule.forFeature([

    ])
  ]
})
export class CartModule {}

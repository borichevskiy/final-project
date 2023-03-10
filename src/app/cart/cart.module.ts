import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartEntity } from "./entities/cart.entity";
import { CartRepo } from "./repos/cart.repo";
import { UsersRepo } from '../users/repos/users.repo';
import { UserEntity } from '../users/entities/users.entity';


@Module({
  providers: [CartService, CartRepo, UsersRepo],
  controllers: [CartController],
  imports: [
    TypeOrmModule.forFeature([
        CartEntity, UserEntity
    ])
  ]
})
export class CartModule {}

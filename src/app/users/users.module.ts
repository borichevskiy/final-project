import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { UserEntity } from "./entities/users.entity";
import { CartEntity } from "../cart/entities/cart.entity";
import { BrandEntity } from "../brand/entities/brand.entity";
import { UserRoleEntity } from "../roles/entities/user-role.entity";
import { OrdersEntity } from "../orders/entities/orders.entity";
import { UserInfoEntity } from "./entities/user-info.entity";
import { CategoryEntity } from "../categories/entities/category.entity";
import { ProductsEntity } from "../products/entities/products.entity";
import { RatingEntity } from "../rating/entities/rating.entity";


@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    TypeOrmModule.forFeature([
      UserEntity, 
      UserInfoEntity
    ])
  ]
})
export class UsersModule {}

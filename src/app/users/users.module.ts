import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepo } from './repos/users.repo';

import { UserEntity } from "./entities/users.entity";
import { CartEntity } from "../cart/entities/cart.entity";
import { BrandEntity } from "../brand/entities/brand.entity";
import { UserRoleEntity } from "../roles/entities/user-role.entity";
import { OrdersEntity } from "../orders/entities/orders.entity";
import { UserInfoEntity } from "./entities/user-info.entity";
import { CategoryEntity } from "../categories/entities/category.entity";
import { ProductsEntity } from "../products/entities/products.entity";
import { RatingEntity } from "../rating/entities/rating.entity";
import { SecurityModule } from '../security/security.module';
import { RolesRepo } from '../roles/repos/roles.repo';


@Module({
  providers: [UsersService, UsersRepo, RolesRepo],
  controllers: [UsersController],
  exports: [
    UsersRepo, UsersService
  ],
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      UserInfoEntity,
      CartEntity,
      BrandEntity,
      UserRoleEntity,
      OrdersEntity,
      UserInfoEntity,
      CategoryEntity,
      ProductsEntity,
      RatingEntity
    ]),
    SecurityModule
  ]
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UsersModule } from './app/users/users.module';
import { UserEntity } from "./app/users/entities/users.entity";
import { CartEntity } from "./app/cart/entities/cart.entity";
import { BrandEntity } from "./app/brand/entities/brand.entity";
import { UserRoleEntity } from "./app/roles/entities/user-role.entity";
import { OrdersEntity } from "./app/orders/entities/orders.entity";
import { UserInfoEntity } from "./app/users/entities/user-info.entity";
import { CategoryEntity } from "./app/categories/entities/category.entity";
import { ProductsEntity } from "./app/products/entities/products.entity";
import { RatingEntity } from "./app/rating/entities/rating.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [UserEntity, CartEntity, BrandEntity, UserRoleEntity, OrdersEntity, UserInfoEntity, CategoryEntity, ProductsEntity, RatingEntity],
        autoLoadEntities: true,
        synchronize: true
      }),
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";

// ============ App ================
import { UsersModule } from './app/users/users.module';
import { AuthModule } from './app/auth/auth.module';
import { RolesModule } from './app/roles/roles.module';
import { RatingModule } from './app/rating/rating.module';
import { ProductsModule } from './app/products/products.module';
import { OrdersModule } from './app/orders/orders.module';
import { CategoriesModule } from './app/categories/categories.module';
import { CartModule } from './app/cart/cart.module';
import { BrandModule } from './app/brand/brand.module';
import { dataSourceOptions } from "./config/typeOrm.config";


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    RolesModule,
    RatingModule,
    ProductsModule,
    OrdersModule,
    CategoriesModule,
    CartModule,
    BrandModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

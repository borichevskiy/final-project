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

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({}),
    }),
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

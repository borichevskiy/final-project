import { DataSource, DataSourceOptions } from "typeorm";
import { UserEntity } from "../app/users/entities/users.entity";
import { config } from "dotenv";
import { UserInfoEntity } from "../app/users/entities/user-info.entity";
import { BrandEntity } from "../app/brand/entities/brand.entity";
import { CartEntity } from "../app/cart/entities/cart.entity";
import { CategoryEntity } from "../app/categories/entities/category.entity";
import { OrdersEntity } from "../app/orders/entities/orders.entity";
import { ProductsEntity } from "../app/products/entities/products.entity";
import { RatingEntity } from "../app/rating/entities/rating.entity";
import { UserRoleEntity } from "../app/roles/entities/user-role.entity";
import { updatePostTable1678532914341 } from "../../migrations/1678532914341-update-post-table";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

config();

export const dataSourceOptions: DataSourceOptions = {

  type: "postgres",
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'final_db',
  synchronize: false,
  installExtensions: true,
  migrations: [updatePostTable1678532914341],
  entities: [UserEntity, UserInfoEntity, BrandEntity, CartEntity, CategoryEntity, OrdersEntity, ProductsEntity, RatingEntity, UserRoleEntity],


};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;

// config();
//
// export const dataSourceOptions: DataSourceOptions = {
//
//   type: "postgres",
//   host: process.env.POSTGRES_HOST as string,
//   port: parseInt(process.env.POSTGRES_PORT as string, 10) || 5432,
//   username: process.env.POSTGRES_USER as string,
//   password: process.env.POSTGRES_PASSWORD as string,
//   database: process.env.POSTGRES_DB as string,
//   synchronize: false,
//   installExtensions: true,
//   migrations: [updatePostTable1678532914341],
//   entities: [UserEntity, UserInfoEntity, BrandEntity, CartEntity, CategoryEntity, OrdersEntity, ProductsEntity, RatingEntity, UserRoleEntity],
//
//
// };
//
// const dataSource = new DataSource(dataSourceOptions);
// export default dataSource;


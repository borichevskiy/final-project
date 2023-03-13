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
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { createTables1678705992318 } from "../../migrations/1678705992318-create-tables";

config();

export const dataSourceOptions: DataSourceOptions = {

  type: "postgres",
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'final_db',
  synchronize: true,
  installExtensions: true,
  migrations: [createTables1678705992318],
  entities: [UserEntity, UserInfoEntity, BrandEntity, CartEntity, CategoryEntity, OrdersEntity, ProductsEntity, RatingEntity, UserRoleEntity],

};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;



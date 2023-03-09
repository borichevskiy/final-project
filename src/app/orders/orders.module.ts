import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';


@Module({
  providers: [OrdersService],
  controllers: [OrdersController],
  imports: [
    TypeOrmModule.forFeature([

    ])
  ]
})
export class OrdersModule {}

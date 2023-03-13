import { Injectable } from '@nestjs/common';
import { OrdersRepo } from "./repos/orders.repo";
import { CreateOrderDto } from "./dtos/create-order.dto";

@Injectable()
export class OrdersService {

  constructor(
    private readonly ordersRepo: OrdersRepo,
  ) { }

  async getOrders() {
    return await this.ordersRepo.getAllOrders();
  }

  async getOrderById(id : number) {
    return await this.ordersRepo.getOrderById(id);
  }

  async createOrder(dto: CreateOrderDto) {
    const newOrder = this.ordersRepo.create({
      ...dto
    });

    return this.ordersRepo.save(newOrder);
  }

  public updateOrder(updateId: number, dto: CreateOrderDto) {
    return this.ordersRepo.update(updateId, { ...dto });
  }

  public delete(id: number) {
    return this.ordersRepo.delete(id);
  }

}

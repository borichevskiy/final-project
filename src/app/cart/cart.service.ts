import { Injectable } from '@nestjs/common';
import { CartRepo } from "./repos/cart.repo";
import { CreateCartDto } from "./dtos/create-cart.dto";

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepo: CartRepo,
  ) { }

  async getCarts() {
    return await this.cartRepo.getAllCarts();
  }

  async getCartById(id : number) {
    return await this.cartRepo.getCartById(id);
  }

  async createCart(dto: CreateCartDto) {
    const newCart = this.cartRepo.create({
      ...dto
    });

    return this.cartRepo.save(newCart);
  }

  public updateCart(updateId: number, dto: CreateCartDto) {
    return this.cartRepo.update(updateId, { ...dto });
  }

  public delete(id: number) {
    return this.cartRepo.delete(id);
  }

}

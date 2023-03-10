import { Repository } from "typeorm";
import { UserEntity } from "../../users/entities/users.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CartEntity } from "../entities/cart.entity";

export class CartRepo extends Repository<CartEntity> {

  constructor(
    @InjectRepository(CartEntity) repository: Repository<CartEntity>
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async getCartById(id : string) {
    return await this.findOne({ where: { id }, relations: ["products"] });
  }

  async getAllCarts() {
    return await this.find({relations: ["products"]});
  }

}
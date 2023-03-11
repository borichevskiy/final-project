import { Injectable } from '@nestjs/common';
import { UsersRepo } from './repos/users.repo';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepo
  ) { }

  async getUsers() {
    return await this.usersRepository.getAllUsers();
  }

  async getUserById(id : string) {
    return await this.usersRepository.getUserById(id);
  }
}

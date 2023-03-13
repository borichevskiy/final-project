import { Injectable } from '@nestjs/common';
import { UsersRepo } from './repos/users.repo';
import { CreateUserDto } from "./dtos/create-user.dto";
import { AddUserInfoDto } from "./dtos/add-user-info.dto";
import { UserInfoEntity } from "./entities/user-info.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/users.entity";
import { UserRoleTypes } from '../roles/enums/user-role-types.enum';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepo,
    @InjectRepository(UserInfoEntity) private infoRepository: Repository<UserInfoEntity>
  ) { }

  async getUsers() {
    return await this.usersRepository.getAllUsers();
  }

  async getUserById(id : string) {
    return await this.usersRepository.getUserById(id);
  }

  async getUserByEmail(email: string) {
    return await this.usersRepository.getUserByEmail(email);
  }

 async createUser(dto: CreateUserDto) {
   const newUser = this.usersRepository.create({
     created: new Date(),
     updated: new Date(),
     roleId: 1,
     roleType: UserRoleTypes.Client,
     email: dto.email,
     password: dto.password

   });

   return this.usersRepository.save(newUser);
 }

  public updateUser(updateId: number, dto: CreateUserDto) {
    return this.usersRepository.update(updateId, { ...dto });
  }

  public delete(id: number) {
    return this.usersRepository.delete(id);
  }

  public async addUserInfo(userId: string, dto: AddUserInfoDto) {
      const user: UserEntity = await this.usersRepository.getUserById(userId);
      const userInfo = await this.infoRepository.save(dto);
      user.userInfo = userInfo;
      return await this.usersRepository.save(user);
  }


}

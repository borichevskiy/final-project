import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { RolesRepo } from '../roles/repos/roles.repo';
import { UsersRepo } from '../users/repos/users.repo';


@Injectable()
export class SecurityService {
  constructor(
    private readonly rolesRepository: RolesRepo,
    private readonly usersRepository: UsersRepo
  ) { }

  public async getUserById(userId: string) {
    return await this.usersRepository.getUserById(userId);
  }

  public async getRoleById(roleId: number) {
    return await this.rolesRepository.getRoleById(roleId);
  }

  // TODO replace UserEntity with security interface
  // async generateToken(entity: UserEntity) {
  //   const payload = UserSessionDto.fromEntity(entity, []);
  //   const access_token = this.jwtService.sign(payload);

  //   return {
  //     access_token,
  //   } as JwtTokenDto;
  // }
}

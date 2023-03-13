import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, HttpException, HttpStatus } from '@nestjs/common';

import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { RoleDto } from 'src/app/roles/dtos/role.dto';

import { UserPermissions } from 'src/app/roles/enums/user-permissions.enum';
// import { UserDto } from 'src/app/users/dtos/user.dto';
import { PERMISSION_KEY } from '../decorators/permissions.decorator';
import { UserSessionDto } from '../dtos/userSession.dto';
import { UserDto } from 'src/app/users/dtos/user.dto';
import { AuthService } from '../auth.service';
import { UsersService } from 'src/app/users/users.service';
import { RolesRepo } from 'src/app/roles/repos/roles.repo';

@Injectable()
export class JwtPermissionsGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private readonly securityService: UsersService,
    private readonly rolesRepository: RolesRepo,
  ) {}

  async canActivate(context: ExecutionContext) {
    try {
      const requiredPemissions = this.reflector.getAllAndOverride<UserPermissions []>(
        PERMISSION_KEY, 
        [
          context.getHandler(),
          context.getClass(),
        ]
      );

      if (!requiredPemissions) {
        return true;
      }
      
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if(bearer !== 'Bearer' || !token) {
        throw new HttpException({message: "User unauthorized"}, HttpStatus.UNAUTHORIZED);
      }

      const decodedUser = UserSessionDto.fromPayload(this.jwtService.verify(token));

      const userEntity = await this.securityService.findById(decodedUser.id)
      if (!userEntity) {
        throw new HttpException({message: "User unauthorized"}, HttpStatus.UNAUTHORIZED);
      }

      const user = UserDto.fromEntity(userEntity)

      if (!(decodedUser.roleId === user.roleId)) {
        throw new HttpException({message: "User unauthorized"}, HttpStatus.UNAUTHORIZED);
      }
      req.user = decodedUser;

      const roleEntity = await this.rolesRepository.getRoleById(decodedUser.roleId);
      if (!roleEntity) {
        throw new HttpException({message: "User unauthorized"}, HttpStatus.UNAUTHORIZED);
      }

      const role = RoleDto.fromEntity(roleEntity)
      
      return requiredPemissions.some((permission) => role.permissions?.includes(permission));
    } catch (error) {
      throw new HttpException({message: "User unauthorized"}, HttpStatus.UNAUTHORIZED);
    }
  }
}
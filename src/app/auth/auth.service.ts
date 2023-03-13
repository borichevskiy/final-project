import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { Injector } from '@nestjs/core/injector/injector';
import { JwtService } from '@nestjs/jwt';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { UserRoleEntity } from '../roles/entities/user-role.entity';
import { RolesRepo } from '../roles/repos/roles.repo';
import { UsersRepo } from '../users/repos/users.repo';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { PayloadToken } from './models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly rolesRepository: RolesRepo,
  ) {}



  async validateUser(email: string, password: string) {
    const user: {
      password: string;
      id: string;
    } = await this.usersService.findByEmailAndGetPassword(email);

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...rta } = user;
        return rta;
      }
    }
    return null;
  }


  

  async login(user: PayloadToken) {
    const { accessToken } = this.jwtToken(user);
    const refreshToken = this.jwtRefreshToken(user);
    await this.usersService.setCurrentRefreshToken(refreshToken, user.id);

    return {
      accessToken,
      refreshToken,
    };
  }

  jwtToken(user: PayloadToken) {
    const payload: PayloadToken = { email: user.email, id: user.id, roleId: user.roleId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  jwtRefreshToken(user: PayloadToken) {
    const payload = { email: user.email, id: user.id };

    const refreshToken = this.jwtService.sign(payload, {
      secret: 'SECRET_TOKEN',
      expiresIn: `2d`,
    });

    return refreshToken;
  }

  async logout(user: PayloadToken) {
    return await this.usersService.removeRefreshToken(user.id);
  }

  async createAccessTokenFromRefreshToken(user: PayloadToken) {
    return this.jwtToken(user);
  }


}

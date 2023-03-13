import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Repository } from 'typeorm';
import { UserRoleEntity } from '../roles/entities/user-role.entity';
import { RolesRepo } from '../roles/repos/roles.repo';
import { UserEntity } from '../users/entities/users.entity';
import { UsersRepo } from '../users/repos/users.repo';
// import config from '../config';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtRefreshTokenStrategy } from './strategies/jwt-refresh.strategy';
import { LocalStrategy } from './strategies/local.strategy';
config();

@Module({
  imports: [
    JwtModule.register({
      secret: 'SECRET',
      signOptions: {
        expiresIn: '1h'
      }
    }),
    TypeOrmModule.forFeature([
      UserEntity, UserRoleEntity
    ]),
    PassportModule,
  ],
  providers: [ 
    UsersService,
    AuthService,
    LocalStrategy,
    RolesRepo,
    JwtRefreshTokenStrategy,
    UsersRepo
  ], 
  exports: [
    JwtModule
  ]
  // imports: [
  //   // ConfigModule,
  //   UsersModule,
  //   PassportModule,
  //   JwtModule.registerAsync({
  //     // inject: [config.KEY],
  //     useFactory: (configService: ConfigType<typeof config>) => {
  //       return {
  //         secret: process.env.PRIVATE_KEY,
  //         // signOptions: {
  //         //   expiresIn: configService.jwt.accessTokenExpiration,
  //         // },
  //       };
  //     },
  //   }),
  // ],
  // controllers: [AuthController],
  // providers: [AuthService, LocalStrategy, JwtRefreshTokenStrategy],
})
export class AuthModule {}

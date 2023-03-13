import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { config } from 'dotenv';
import { Repository } from 'typeorm';
import { UserEntity } from '../users/entities/users.entity';
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
    // ConfigModule,
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      // inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          secret: process.env.PRIVATE_KEY,
          // signOptions: {
          //   expiresIn: configService.jwt.accessTokenExpiration,
          // },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtRefreshTokenStrategy],
})
export class AuthModule {}

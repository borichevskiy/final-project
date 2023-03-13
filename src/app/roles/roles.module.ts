import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

// ============ App ================
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RolesRepo } from './repos/roles.repo';
import { UserRoleEntity } from './entities/user-role.entity';

@Module({
  providers: [RolesService, RolesRepo],
  controllers: [RolesController],
  imports: [
    TypeOrmModule.forFeature([
      UserRoleEntity
    ])
  ]
})
export class RolesModule {}

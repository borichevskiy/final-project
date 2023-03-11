import { Controller, Get, Param, UseGuards } from '@nestjs/common';

import { UsersService } from './users.service';
import { JwtPermissionsGuard } from '../security/guards/jwt-permissions.guard';
import { UserPermissions } from '../roles/enums/user-permissions.enum';
import { RequirePermissions } from '../security/decorators/permissions.decorator';

@Controller('users') 
@UseGuards(JwtPermissionsGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @RequirePermissions(UserPermissions.GetUsers)
  async getUsers() {
    return await this.usersService.getUsers();
  }

  @Get(':id')
  @RequirePermissions(UserPermissions.GetUserById)
  async getUserById(@Param('id') id : string) {
    return await this.usersService.getUserById(id);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';
import { JwtPermissionsGuard } from '../auth/guards/jwt-permissions.guard';
import {
  RegistrationDto,
  DefaultColumnsResponse,
  UpdateUserDto,
} from './dtos/registration.dto';
import { UsersService } from './users.service';

@ApiTags('users') // put the name of the controller in swagger
@Controller('users')
@UseGuards(JwtPermissionsGuard) //  makes the all routs as private by default
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'create a user with customer role' })
  @ApiResponse({
    status: 201,
    type: DefaultColumnsResponse,
  })
  @Public() // makes the endpoint accessible to all
  @Post('registration')
  registration(@Body() registrationDto: RegistrationDto) {
    return this.usersService.registration(registrationDto);
  }

  @ApiResponse({
    status: 200,
    isArray: true,
    type: DefaultColumnsResponse,
  })
  @ApiBearerAuth('access-token')
  @Get()
  @Public()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiBearerAuth('access-token')
  @ApiResponse({
    status: 200,
    type: DefaultColumnsResponse,
  })
  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @ApiBearerAuth('access-token')
  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiBearerAuth('access-token')
  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}


// import { Controller, Get, Param, UseGuards } from '@nestjs/common';

// import { UsersService } from './users.service';
// import { JwtPermissionsGuard } from '../security/guards/jwt-permissions.guard';
// import { UserPermissions } from '../roles/enums/user-permissions.enum';
// import { RequirePermissions } from '../security/decorators/permissions.decorator';

// @Controller('users') 
// @UseGuards(JwtPermissionsGuard)
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Get()
//   @RequirePermissions(UserPermissions.GetUsers)
//   async getUsers() {
//     return await this.usersService.getUsers();
//   }

//   @Get(':id')
//   @RequirePermissions(UserPermissions.GetUserById)
//   async getUserById(@Param('id') id : string) {
//     return await this.usersService.getUserById(id);
//   }
// }

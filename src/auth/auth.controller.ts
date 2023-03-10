import { Controller, Post } from '@nestjs/common';


@Controller('auth')
export class AuthController {

  @Post("sign-in")
  async signIn() {
   
  }

  @Post('sign-out')
  async signOut() {

  }
}

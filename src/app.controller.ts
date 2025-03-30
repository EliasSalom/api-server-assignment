import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Login, SignUp } from './dto/auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  logic(@Body() data: Login) {}

  @Post('sign-up')
  signUp(@Body() data: SignUp) {}

  @Post('check-token')
  checkToken() {}
}

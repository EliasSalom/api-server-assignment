import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Login, SignUp } from './dto/auth.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('login')
  logic(@Body() data: Login) {
    const { email, password } = data;
    return this.appService.login(email, password);
  }

  @Post('signup')
  signUp(@Body() data: SignUp) {
    const { email, password } = data;
    return this.appService.signUp(email, password);
  }

  @Get()
  healthCheck() {
    return 'Server is running';
  }
}

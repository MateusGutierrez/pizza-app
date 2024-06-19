import { Controller, Get, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginUserDto } from './dto/login-dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  login(@Body() loginUserDto: LoginUserDto) {
    return this.loginService.login(loginUserDto);
  }
}

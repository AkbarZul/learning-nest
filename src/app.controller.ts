import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { UserService } from './user/user/user.service.js';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

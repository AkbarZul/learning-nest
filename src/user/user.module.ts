import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller.js';
import { UserService } from './user/user.service.js';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

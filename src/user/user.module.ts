import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller.js';
import { UserService } from './user/user.service.js';
import {
  Connection,
  MonggoDBConnection,
  MySQLConnection,
} from './connection/connection.js';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useClass:
        process.env.DATABASE == 'mysql' ? MySQLConnection : MonggoDBConnection,
    },
  ],
})
export class UserModule {}

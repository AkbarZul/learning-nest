import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller.js';
import { UserService } from './user/user.service.js';
import {
  Connection,
  MonggoDBConnection,
  MySQLConnection,
} from './connection/connection.js';
import { mailService, MailService } from './mail/mail.service.js';
import {
  createuserrepository,
  UserRepository,
} from './user-repository/user-repository.js';
import { MemberService } from './member/member.service.js';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useClass:
        process.env.DATABASE == 'mysql' ? MySQLConnection : MonggoDBConnection,
    },
    {
      provide: MailService,
      useValue: mailService,
    },
    {
      provide: 'EmailService',
      useExisting: MailService,
    },
    {
      provide: UserRepository,
      useFactory: createuserrepository,
      inject: [Connection],
    },
    MemberService,
  ],
})
export class UserModule {}

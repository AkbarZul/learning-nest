import { Injectable } from '@nestjs/common';
import { Connection } from '../connection/connection.js';
import { PrismaService } from '../../prisma/prisma/prisma.service.js';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {
    console.info(`create user repository`);
  }

  async save(firstName: string, lastName?: string) {
    await this.prismaService.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
      },
    });
  }
}

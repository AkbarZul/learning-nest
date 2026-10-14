import { Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
// import type { Request } from 'express';

@Controller('api/users')
export class UserController {
  @Get('/hello')
  sayHello(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): string {
    return `Hello, ${firstName} ${lastName}!`;
  }
  //   @Get('/:id')
  //   getById(@Req() request: Request): string {
  //     return `User ID: ${request.params.id}`;
  //   }

  @Get('/:id')
  getById(@Param('id') id: string): string {
    return `User ID: ${id}`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/sample')
  getSample(): string {
    return 'Hello Nest JS';
  }
}

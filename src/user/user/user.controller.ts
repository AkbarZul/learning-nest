import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';

import type { Response, Request } from 'express';

@Controller('api/users')
export class UserController {
  @Get('/set-cookie')
  setCookie(@Query('name') name: string, @Res() response: Response) {
    response.cookie('name', name);
    response.status(200).send(`Cookie 'name' has been set to '${name}'`);
  }

  @Get('/get-cookie')
  getCookie(@Req() request: Request) {
    return request.cookies['name'] || 'Cookie not found';
  }

  @Get('/sample-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      data: 'Hello Nest JS',
    };
  }

  @Get('/hello')
  async sayHello(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): Promise<string> {
    return `Hello, ${firstName} ${lastName}!`;
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<string> {
    return `User ID: ${id}`;
  }

  @Post()
  async post(): Promise<string> {
    return 'POST';
  }

  @Get('/sample')
  async getSample(): Promise<string> {
    return 'Hello Nest JS';
  }
}

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
import { UserService } from './user.service.js';
import { Connection } from '../connection/connection.js';

@Controller('api/users')
export class UserController {
  constructor(
    private service: UserService,
    private connection: Connection,
  ) {}
  @Get('/connection')
  async getConnection(): Promise<string> {
    return this.connection.getName();
  }

  @Get('/hello')
  async sayHello(@Query('name') name: string): Promise<string> {
    return this.service.sayHello(name);
  }

  @Get('view/hello')
  viewHello(@Query('name') name: string, @Res() response: Response) {
    response.render('index.html', {
      title: 'Template Engine',
      name: name,
    });
  }

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

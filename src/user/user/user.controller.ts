import {
  Controller,
  Get,
  Header,
  HttpCode,
//   HttpRedirectResponse,
  Param,
  Post,
  Query,
  Redirect,
//   Req,
//   Res,
} from '@nestjs/common';
// import type { Request } from 'express';

@Controller('api/users')
export class UserController {
  @Get('/sample-response')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleResponse(): Record<string, string> {
    return {
      data: 'Hello Nest JS',
    };
  }

//   @Get('/redirect')
//   @Redirect()
//     redirect(): HttpRedirectResponse {
//         return {
//             url: "/api/users/sample-response",
//             statusCode: 301
//         }
//     }

  @Get('/hello')
  async sayHello(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): Promise<string> {
    return `Hello, ${firstName} ${lastName}!`;
  }
  //   @Get('/:id')
  //   getById(@Req() request: Request): string {
  //     return `User ID: ${request.params.id}`;
  //   }

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

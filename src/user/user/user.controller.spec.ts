import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller.js';
import * as httpMock from 'node-mocks-http'
import { UserService } from './user.service.js';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should can say hello', async () => {
    const response = await controller.sayHello('Akbar')
    expect(response).toBe('Hello Akbar')
  });

  it('should can view template', async () => {
    const response = httpMock.createResponse()
    controller.viewHello('Akbar', response)

    expect(response._getRenderView()).toBe('index.html')
    expect(response._getRenderData()).toEqual({
      name: 'Akbar',
      title: 'Template Engine'
    })
  })
});

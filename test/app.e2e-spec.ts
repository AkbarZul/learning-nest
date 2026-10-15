import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from './../src/app.module.js';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('should can say hello', async () => {
    const result = await request(app.getHttpServer())
      .get('/api/users/hello')
      .query({
        first_name: 'Akbar',
        last_name: 'Zulfikar',
      });

    expect(result.status).toBe(200);
    expect(result.text).toBe('Hello, Akbar Zulfikar!');
  });

  afterEach(async () => {
    await app.close();
  });
});

import { Injectable } from '@nestjs/common';
import { Connection } from '../connection/connection.js';

export class UserRepository {
  connection: Connection;

  save() {
    console.info(`save user with connection ${this.connection.getName()}`);
  }
}

export function createuserrepository(connection: Connection): UserRepository {
  const repository = new UserRepository();
  repository.connection = connection;
  return repository;
}

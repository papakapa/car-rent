import { Injectable } from '@nestjs/common';
import { client } from '../../db';

@Injectable()
export class UserRepositoryService {
  async find() {
    return client.query(`SELECT * FROM users`);
  }

  async findOneById(id: string) {
    const query = {
      text: `SELECT * FROM users WHERE id = $1`,
      values: [ id ],
    }
    return client.query(query);
  }
}

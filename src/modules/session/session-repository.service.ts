import { Injectable } from '@nestjs/common';
import { client } from '../../db';

@Injectable()
export class SessionRepositoryService {
  async find() {
    return client.query(`SELECT * FROM sessions`);
  }

  async findOneById(id: string) {
    const query = {
      text: `SELECT * FROM sessions WHERE id = $1`,
      values: [ id ],
    }
    return client.query(query);
  }
}

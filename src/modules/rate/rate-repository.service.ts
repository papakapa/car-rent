import { Injectable } from '@nestjs/common';
import { client } from '../../db';

@Injectable()
export class RateRepositoryService {
  async find() {
    return client.query(`SELECT * FROM rate`);
  }

  async findOneById(id: string) {
    const query = {
      text: `SELECT * FROM rate WHERE id = $1`,
      values: [id]
    }
    return client.query(query);
  }
}
import { Injectable } from '@nestjs/common';
import { client } from '../../db';

@Injectable()
export class CarRepositoryService {
  async find() {
    return client.query(`SELECT * FROM car`);
  }

  async findOneById(id: string) {
    const query = {
      text: `SELECT * FROM car WHERE id = $1`,
      values: [id]
    }
    return client.query(query);
  }
}
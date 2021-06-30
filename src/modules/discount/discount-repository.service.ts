import { Injectable } from '@nestjs/common';
import { client } from '../../db';

@Injectable()
export class DiscountRepositoryService {
  async find() {
    return client.query(`SELECT * FROM discount`);
  }

  async findOneById(id: string) {
    const query = {
      text: `SELECT * FROM discount WHERE id = $1`,
      values: [id]
    }

    return client.query(query);
  }

  async findOneByPeriod(period: number) {
    const query = {
      text: `SELECT id FROM discount WHERE $1 >= minPeriod AND $1 <= maxPeriod`,
      values: [period]
    };

    return client.query(query);
  }

}
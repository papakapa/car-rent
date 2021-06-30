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

  async checkCarSessions(start: string, end: string, carId: string) {
    const query = {
      text: `SELECT * FROM sessions WHERE car_id = $1 AND (start_date::date >= $2 AND end_date::date <= $3) AND (end_date::date + integer '3') >= $2`,
      values: [ carId, start, end ],
    };

    return client.query(query);
  }
}
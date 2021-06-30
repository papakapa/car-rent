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
      text: `SELECT * FROM sessions 
        WHERE carId = $1 AND (startDate::date >= $2 AND endDate::date <= $3) AND (endDate::date + integer '3') >= $2`,
      values: [ carId, start, end ],
    };

    return client.query(query);
  }

  async searchCarSession(id: string, start: string, end: string) {
    const query = {
      text: `SELECT * FROM sessions WHERE carId = $1 AND startDate::date >= $2 AND endDate::date <= $3`,
      values: [ id, start, end ],
    };

    return client.query(query);
  }
}
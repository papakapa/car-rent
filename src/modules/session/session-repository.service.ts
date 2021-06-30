import { Injectable } from '@nestjs/common';
import { client } from '../../db';
import { SessionDto } from './dto/session.dto';

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

  async createSession(session: SessionDto) {
    const query = {
      text: `INSERT INTO sessions VALUES($1,$2,$3,$4,$5,$6,$7,$8, $9)`,
      values: [
        session.id,
        session.start_date,
        session.end_date,
        session.car_id,
        session.rate_id,
        session.user_id,
        session.discount_id,
        session.price,
        session.status,
      ],
    }
    return client.query(query);
  }

  async checkCarSessions(start: string, end: string, carId: string) {
    const query = {
      text: `SELECT * FROM sessions WHERE car_id = $1 AND (start_date::date >= $2 AND end_date::date <= $3) OR (end_date::date + integer '3') >= $2`,
      values: [ carId, start, end ],
    };

    return client.query(query);
  }

  async searchCarSession(id: string, start: string, end: string) {
    const query = {
      text: `SELECT * FROM sessions WHERE car_id = $1 AND start_date::date >= $2 AND end_date::date <= $3`,
      values: [ id, start, end ],
    };

    return client.query(query);
  }

  async update(sessionId, status) {
    const query = {
      text: `UPDATE sessions SET status = $1 WHERE id = $2`,
      values: [ status, sessionId ],
    };

    return client.query(query);
  }
}

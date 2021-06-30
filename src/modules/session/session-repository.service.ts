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
      text: `INSERT INTO sessions VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
      values: [
        session.id,
        session.startDate,
        session.endDate,
        session.carId,
        session.rateId,
        session.userId,
        session.discountId,
        session.price,
        session.status,
      ],
    }
    return client.query(query);
  }

  async update(sessionId, status) {
    const query = {
      text: `UPDATE sessions SET status = $1 WHERE id = $2`,
      values: [ status, sessionId ],
    };

    return client.query(query);
  }

  async checkCarSessions(start: string, end: string, carId: string) {
    const query = {
      text: `SELECT * FROM sessions 
        WHERE carId = $1 AND ((startDate::date >= $2 AND endDate::date <= $3) OR (endDate::date + integer '3') >= $2)`,
      values: [ carId, start, end ],
    };

    return client.query(query);
  }
}

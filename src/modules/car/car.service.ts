import { Injectable } from '@nestjs/common';
import { CarRepositoryService } from './car-repository.service';
import { SessionRepositoryService } from '../session/session-repository.service';
import * as moment from 'moment';

@Injectable()
export class CarService {
  constructor(
    private readonly carRepository: CarRepositoryService,
    private readonly sessionRepository: SessionRepositoryService
  ) {
  }

  async getAll() {
    const { rows } = await this.carRepository.find();

    return rows;
  }

  async getById(id: string) {
    const {rows} = await this.carRepository.findOneById(id);
    const [result] = rows;

    return result;
  }

  async getStats(id: string, start: string, end: string) {
    if (id) {
      return await this.getCarStats(id, start, end);
    }
  }

  async getCarStats(id: string, start: string, end: string) {
    const { rows } = await this.sessionRepository.searchCarSession(id, start, end);
    if (!rows.length) {
      return { car: id, percent: 0};
    }
    const sessionsInterval = rows.reduce((acc, cur) => {
      const parsedStart = moment(cur.start_date).valueOf();
      const parsedEnd = moment(cur.end_date).valueOf();

      return acc + moment.duration(parsedEnd - parsedStart).asDays();
    }, 0);
    const periodStart = moment(start).valueOf();
    const periodEnd = moment(end).valueOf();

    return { car: id, percent: (sessionsInterval * 100) / (moment.duration(periodEnd - periodStart).asDays())};
  }
}
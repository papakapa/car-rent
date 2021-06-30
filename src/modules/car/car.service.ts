import * as moment from 'moment';
import { Injectable } from '@nestjs/common';
import { CarRepositoryService } from './car-repository.service';
import { SessionRepositoryService } from '../session/session-repository.service';
import { CarStatisticDto } from './dto/car-stats.dto';

@Injectable()
export class CarService {
  constructor(
    private readonly carRepository: CarRepositoryService,
    private readonly sessionRepository: SessionRepositoryService,
  ) {
  }

  async getAll() {
    const { rows } = await this.carRepository.find();

    return rows;
  }

  async getById(id: string) {
    const { rows } = await this.carRepository.findOneById(id);
    const [ result ] = rows;

    return result;
  }

  async getStats(id: string, start: string, end: string): Promise<CarStatisticDto | CarStatisticDto[]> {
    if (id) {
      return await this.getCarStats(id, start, end);
    }
    const cars = await this.getAll();
    const resultStats = [];
    for (let i = 0; i < cars.length; i++) {
      const singleStat = await this.getCarStats(cars[i].id, start, end);
      resultStats.push(singleStat);
    }

    return resultStats;
  }

  async getCarStats(id: string, start: string, end: string): Promise<CarStatisticDto> {
    const { rows } = await this.sessionRepository.searchCarSession(id, start, end);
    if (!rows.length) {
      return { carId: id, percent: 0 };
    }
    const sessionsInterval = rows.reduce((acc, cur) => {
      const parsedStart = moment(cur.start_date).valueOf();
      const parsedEnd = moment(cur.end_date).valueOf();

      return acc + moment.duration(parsedEnd - parsedStart).asDays();
    }, 0);
    const periodStart = moment(start).valueOf();
    const periodEnd = moment(end).valueOf();

    return {
      carId: id,
      percent: (sessionsInterval * 100) / (moment.duration(periodEnd - periodStart).asDays()),
    };
  }
}
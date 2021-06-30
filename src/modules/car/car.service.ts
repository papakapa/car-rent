import * as moment from 'moment';
import { Injectable } from '@nestjs/common';
import { CarRepositoryService } from './car-repository.service';
import { CarStatisticDto } from './dto/car-stats.dto';
import { RateService } from '../rate/rate.service';
import { DiscountService } from '../discount/discount.service';
import { CarAvailabilityDto } from './dto/car-availability.dto';

@Injectable()
export class CarService {
  constructor(
    private readonly carRepository: CarRepositoryService,
    private readonly rateService: RateService,
    private readonly discountService: DiscountService,
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
    const { rows } = await this.carRepository.searchCarSession(id, start, end);
    if (!rows.length) {
      return { carId: id, percent: 0 };
    }
    const sessionsInterval = rows.reduce((acc, cur) => {
      const parsedStart = moment(cur.startdate).valueOf();
      const parsedEnd = moment(cur.enddate).valueOf();

      return acc + moment.duration(parsedEnd - parsedStart).asDays();
    }, 0);
    const periodStart = moment(start).valueOf();
    const periodEnd = moment(end).valueOf();

    return {
      carId: id,
      percent: (sessionsInterval * 100) / (moment.duration(periodEnd - periodStart).asDays()),
    };
  }

  async getAvailable(id: string, start: string, end: string, rateId: string): Promise<CarAvailabilityDto | CarAvailabilityDto[]> {
    if (id) {
      return await this.getCarAvailability(id, start, end, rateId);
    }
    const resultCars = [];
    const cars = await this.getAll();
    for (let i = 0; i < cars.length; i++) {
      const availability = await this.getCarAvailability(cars[i].id, start, end, rateId);
      resultCars.push(availability);
    }

    return resultCars;
  }

  async getCarAvailability(id: string, start: string, end: string, rateId: string): Promise<CarAvailabilityDto> {
    const { rows } = await this.carRepository.checkCarSessions(start, end, id);
    const price = await this.rateService.checkPrice({rateId: rateId, startDate: start, endDate: end});
    const discountId = await this.discountService.checkIsHaveDiscount(start, end);

    return {
      carId: id,
      isAvailable: rows.length === 0,
      startDate: start,
      endDate: end,
      rateId: rateId,
      price,
      discountId
    };
  }
}

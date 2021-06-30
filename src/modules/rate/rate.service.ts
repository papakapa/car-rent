import * as moment from 'moment';
import { Injectable } from '@nestjs/common';
import { RateRepositoryService } from './rate-repository.service';
import { CheckPriceDto } from './dto/check-price.dto';

@Injectable()
export class RateService {
  constructor(private readonly rateRepository: RateRepositoryService) {
  }

  async getAll() {
    const { rows } = await this.rateRepository.find();

    return rows;
  }

  async getById(id: string) {
    const {rows} = await this.rateRepository.findOneById(id);
    const [result] = rows;

    return result;
  }

  async checkPrice(data: CheckPriceDto) {
    const startDate = moment(data.startDate, 'YYYY-MM-DD').valueOf();
    const endDate = moment(data.endDate, 'YYYY-MM-DD').valueOf();
    const interval = moment.duration(endDate - startDate);
    const rate = await this.getById(data.rateId);

    return rate.price * interval.asDays();
  }
}
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
    const startDate = moment(data.start_date, 'YYYY-MM-DD').valueOf();
    const endDate = moment(data.end_date, 'YYYY-MM-DD').valueOf();
    const interval = moment.duration(endDate - startDate);
    const rate = await this.getById(data.rate_id);

    return rate.price * interval.asDays();
  }
}
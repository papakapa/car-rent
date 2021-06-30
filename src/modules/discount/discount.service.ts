import { Injectable } from '@nestjs/common';
import { DiscountRepositoryService } from './discount-repository.service';
import * as moment from 'moment';

@Injectable()
export class DiscountService {
  constructor(private readonly discountRepository: DiscountRepositoryService) {
  }

  async getAll() {
    const { rows } = await this.discountRepository.find();

    return rows;
  }

  async getById(id: string) {
    const {rows} = await this.discountRepository.findOneById(id);
    const [result] = rows;

    return result;
  }

  async checkIsHaveDiscount(startDate: string, endDate: string) {
    const parsedStartDate = moment(startDate, 'YYYY-MM-DD').valueOf();
    const parsedEndDate = moment(endDate, 'YYYY-MM-DD').valueOf();
    const interval = moment.duration(parsedEndDate - parsedStartDate).asDays();

    const {rows} = await this.discountRepository.findOneByPeriod(interval);

    return rows.length ? rows[0].id : null;
  }
}

import { Injectable } from '@nestjs/common';
import { DiscountRepositoryService } from './discount-repository.service';

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
}
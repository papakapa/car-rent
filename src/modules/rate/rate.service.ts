import { Injectable } from '@nestjs/common';
import { RateRepositoryService } from './rate-repository.service';

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
}
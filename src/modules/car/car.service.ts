import { Injectable } from '@nestjs/common';
import { CarRepositoryService } from './car-repository.service';

@Injectable()
export class CarService {
  constructor(private readonly carRepository: CarRepositoryService) {
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
}
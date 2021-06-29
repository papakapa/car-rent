import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarRepositoryService } from './car-repository.service';
import { CarService } from './car.service';

@Module({
  controllers: [ CarController ],
  providers: [ CarRepositoryService, CarService ],
})
export class CarModule {
}

import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarRepositoryService } from './car-repository.service';
import { CarService } from './car.service';
import { SessionRepositoryService } from '../session/session-repository.service';

@Module({
  controllers: [ CarController ],
  providers: [ CarRepositoryService, CarService, SessionRepositoryService ],
})
export class CarModule {
}

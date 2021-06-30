import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarRepositoryService } from './car-repository.service';
import { CarService } from './car.service';
import { SessionRepositoryService } from '../session/session-repository.service';
import { RateModule } from '../rate/rate.module';
import { DiscountModule } from '../discount/discount.module';

@Module({
  imports: [ RateModule, DiscountModule ],
  controllers: [ CarController ],
  providers: [
    CarRepositoryService,
    CarService,
    SessionRepositoryService,
  ],
})
export class CarModule {
}

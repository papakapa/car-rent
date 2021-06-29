import { Module } from '@nestjs/common';
import { CarModule } from './modules/car/car.module';
import { DiscountModule } from './modules/discount/discount.module';
import { RateModule } from './modules/rate/rate.module';
import { SessionModule } from './modules/session/session.module';
import { UserController } from './modules/user/user.controller';

@Module({
  imports: [ CarModule, DiscountModule, RateModule, SessionModule, UserController ],
})
export class AppModule {
}

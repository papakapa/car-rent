import { Module } from '@nestjs/common';
import { CarModule } from './modules/car/car.module';
import { DiscountModule } from './modules/discount/discount.module';
import { RateModule } from './modules/rate/rate.module';
import { SessionModule } from './modules/session/session.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ CarModule, DiscountModule, RateModule, SessionModule, UserModule ],
})
export class AppModule {
}

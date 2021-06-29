import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionRepositoryService } from './session-repository.service';
import { SessionService } from './session.service';
import { RateModule } from '../rate/rate.module';
import { DiscountModule } from '../discount/discount.module';

@Module({
  imports: [ RateModule, DiscountModule ],
  controllers: [ SessionController ],
  providers: [ SessionRepositoryService, SessionService ],
})
export class SessionModule {
}

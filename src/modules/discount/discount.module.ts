import { Module } from '@nestjs/common';
import { DiscountController } from './discount.controller';
import { DiscountRepositoryService } from './discount-repository.service';
import { DiscountService } from './discount.service';

@Module({
  controllers: [ DiscountController ],
  providers: [ DiscountRepositoryService, DiscountService ],
  exports: [ DiscountService ],
})
export class DiscountModule {
}

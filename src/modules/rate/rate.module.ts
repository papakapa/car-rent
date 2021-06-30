import { Module } from '@nestjs/common';
import { RateController } from './rate.controller';
import { RateRepositoryService } from './rate-repository.service';
import { RateService } from './rate.service';

@Module({
  controllers: [ RateController ],
  providers: [ RateRepositoryService, RateService ],
  exports: [ RateService ],
})
export class RateModule {
}

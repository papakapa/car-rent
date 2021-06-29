import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionRepositoryService } from './session-repository.service';
import { SessionService } from './session.service';

@Module({
  controllers: [ SessionController ],
  providers: [ SessionRepositoryService, SessionService ],
})
export class SessionModule {
}

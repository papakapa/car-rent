import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepositoryService } from './user-repository.service';
import { UserService } from './user.service';

@Module({
  controllers: [ UserController ],
  providers: [ UserRepositoryService, UserService ],
})
export class UserModule {
}

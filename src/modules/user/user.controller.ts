import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('/')
  getAll() {

  }

  @Get(':id')
  getById(@Param() param) {

  }
}
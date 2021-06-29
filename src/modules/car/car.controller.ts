import { Controller, Get, Param } from '@nestjs/common';

@Controller('car')
export class CarController {
  @Get('/')
  getAll() {

  }

  @Get(':id')
  getById(@Param() param) {

  }
}
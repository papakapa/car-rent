import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('rate')
export class RateController {
  @Get('/')
  getAll() {

  }

  @Get(':id')
  getById(@Param() param) {

  }

  @Post('price')
  checkPrice (@Body('options') options) {

  }
}
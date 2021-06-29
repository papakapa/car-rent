import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('session')
export class SessionController {
  @Get('/')
  getAll() {

  }

  @Get(':id')
  getById(@Param() param) {

  }

  @Post('start')
  startSession(@Body('data') data) {

  }

  @Post('finish')
  finishSession(@Body('data') data) {

  }
}
import { Controller, Get, Param } from '@nestjs/common';

@Controller('discount')
export class DiscountController {
  @Get('/')
  getAll() {

  }

  @Get(':id')
  getById(@Param() param) {

  }
}

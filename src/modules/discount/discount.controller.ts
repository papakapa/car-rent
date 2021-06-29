import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DiscountDto } from './dto/discount.dto';

@ApiTags('DiscountController')
@Controller('discount')
export class DiscountController {
  @Get('/')
  @ApiResponse({ type: [ DiscountDto ], status: 200 })
  getAll() {

  }

  @Get(':id')
  @ApiResponse({ type: DiscountDto, status: 200 })
  getById(@Param('id') id: string) {

  }
}

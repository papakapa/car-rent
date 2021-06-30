import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DiscountDto } from './dto/discount.dto';
import { DiscountService } from './discount.service';

@ApiTags('DiscountController')
@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {
  }

  @Get('/')
  @ApiOperation({ summary: 'Возвращает все скидки' })
  @ApiResponse({ type: [ DiscountDto ], status: 200 })
  async getAll() {
    return await this.discountService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Возвращает скидку по id' })
  @ApiResponse({ type: DiscountDto, status: 200 })
  async getById(@Param('id') id: string) {
    return await this.discountService.getById(id);
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DiscountDto } from './dto/discount.dto';
import { DiscountService } from './discount.service';

@ApiTags('DiscountController')
@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {
  }

  @Get('/')
  @ApiResponse({ type: [ DiscountDto ], status: 200 })
  async getAll() {
    return await this.discountService.getAll();
  }

  @Get(':id')
  @ApiResponse({ type: DiscountDto, status: 200 })
  async getById(@Param('id') id: string) {
    return await this.discountService.getById(id);
  }
}

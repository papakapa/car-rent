import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RateDto } from './dto/rate.dto';
import { RateService } from './rate.service';

@ApiTags('RateController')
@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {
  }

  @Get('/')
  @ApiResponse({ type: [ RateDto ], status: 200 })
  async getAll() {
    return await this.rateService.getAll();
  }

  @Get(':id')
  @ApiResponse({ type: RateDto, status: 200 })
  async getById(@Param('id') id: string) {
    return await this.rateService.getById(id);
  }

  @Post('price')
  @ApiResponse({ type: Number, status: 200 })
  checkPrice(@Body('options') options) {

  }
}
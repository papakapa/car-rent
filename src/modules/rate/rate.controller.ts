import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RateDto } from './dto/rate.dto';
import { RateService } from './rate.service';
import { CheckPriceDto } from './dto/check-price.dto';

@ApiTags('RateController')
@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {
  }

  @Get('/')
  @ApiOperation({ summary: 'Возвращает все тарифы' })
  @ApiResponse({ type: [ RateDto ], status: 200 })
  async getAll() {
    return await this.rateService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Возвращает тариф по id' })
  @ApiResponse({ type: RateDto, status: 200 })
  async getById(@Param('id') id: string) {
    return await this.rateService.getById(id);
  }

  @Post('price')
  @ApiOperation({ summary: 'Возвращает примерную стоимость выбранного тарифа на определенный период' })
  @ApiBody({type: CheckPriceDto})
  @ApiResponse({ type: Number, status: 200 })
  async checkPrice(@Body() options: CheckPriceDto) {
    return await this.rateService.checkPrice(options);
  }
}

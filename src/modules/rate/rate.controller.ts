import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RateDto } from './dto/rate.dto';

@ApiTags('RateController')
@Controller('rate')
export class RateController {
  @Get('/')
  @ApiResponse({ type: [ RateDto ], status: 200 })
  getAll() {

  }

  @Get(':id')
  @ApiResponse({ type: RateDto, status: 200 })
  getById(@Param('id') id: string) {

  }

  @Post('price')
  @ApiResponse({ type: Number, status: 200 })
  checkPrice(@Body('options') options) {

  }
}
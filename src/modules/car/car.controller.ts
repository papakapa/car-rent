import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarDto } from './dto/car.dto';

@ApiTags('CarController')
@Controller('car')
export class CarController {
  @Get('/')
  @ApiResponse({ type: [ CarDto ], status: 200 })
  getAll() {

  }

  @Get(':id')
  @ApiResponse({ type: CarDto, status: 200 })
  getById(@Param('id') id: string) {

  }
}
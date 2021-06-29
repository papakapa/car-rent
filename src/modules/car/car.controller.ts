import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarDto } from './dto/car.dto';
import { CarService } from './car.service';

@ApiTags('CarController')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {
  }

  @Get('/')
  @ApiResponse({ type: [ CarDto ], status: 200 })
  async getAll() {
    return await this.carService.getAll();
  }

  @Get(':id')
  @ApiResponse({ type: CarDto, status: 200 })
  async getById(@Param('id') id: string) {
    return await this.carService.getById(id);
  }

  @Get('stats/:id')
  @ApiQuery({ name: 'start', type: String })
  @ApiQuery({ name: 'end', type: String })
  @ApiQuery({ name: 'id', type: String, required: false })
  async getStats(@Query('id') id: string, @Query('start') start: string, @Query('end') end: string) {
    return await this.carService.getStats(id, start, end);
  }
}
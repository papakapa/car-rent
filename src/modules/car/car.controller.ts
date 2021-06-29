import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
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
}
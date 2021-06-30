import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarService } from './car.service';
import { CarDto } from './dto/car.dto';
import { CarStatisticDto } from './dto/car-stats.dto';
import { CarAvailabilityDto } from './dto/car-availability.dto';

@ApiTags('CarController')
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {
  }

  @Get('/')
  @ApiOperation({ summary: 'Возвращает список всех машин' })
  @ApiResponse({ type: [ CarDto ], status: 200 })
  async getAll() {
    return await this.carService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Возвращает машину по ее id' })
  @ApiResponse({ type: CarDto, status: 200 })
  async getById(@Param('id') id: string) {
    return await this.carService.getById(id);
  }

  @Get('stats/:id')
  @ApiOperation({ summary: 'Возвращает среднюю загруженность одной/всех машин' })
  @ApiQuery({ name: 'start', type: String })
  @ApiQuery({ name: 'end', type: String })
  @ApiQuery({ name: 'id', type: String, required: false })
  @ApiResponse({ type: CarStatisticDto, status: 200 })
  async getStats(@Query('id') id: string, @Query('start') start: string, @Query('end') end: string) {
    return await this.carService.getStats(id, start, end);
  }

  @Get('available/:id')
  @ApiOperation({ summary: 'Возвращает доступную машину/машины в определенном промежутке времени' })
  @ApiQuery({ name: 'start', type: String })
  @ApiQuery({ name: 'end', type: String })
  @ApiQuery({ name: 'rateId', type: String })
  @ApiQuery({ name: 'id', type: String, required: false })
  @ApiOkResponse({ type: CarAvailabilityDto })
  async getAvailable(
    @Query('id') id: string,
    @Query('start') start: string,
    @Query('end') end: string,
    @Query('rateId') rateId: string,
  ) {
    return await this.carService.getAvailable(id, start, end, rateId);
  }
}

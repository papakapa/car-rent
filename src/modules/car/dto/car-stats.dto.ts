import { ApiProperty } from '@nestjs/swagger';

export class CarStatisticDto {
  @ApiProperty()
  carId: string;

  @ApiProperty()
  percent: number;
}

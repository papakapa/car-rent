import { ApiProperty } from '@nestjs/swagger';

export class CarDto {
  @ApiProperty({ required: true, uniqueItems: true})
  id: string;

  @ApiProperty({ required: true})
  brand: string;

  @ApiProperty({ required: true})
  model: string;

  @ApiProperty({ required: true, uniqueItems: true})
  vin: string;

  @ApiProperty({ required: true})
  licencePlate: string;
}

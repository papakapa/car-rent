import { ApiProperty } from '@nestjs/swagger';

export class RateDto {
  @ApiProperty({ required: true, uniqueItems: true })
  id: string;

  @ApiProperty({ required: true })
  price: number;

  @ApiProperty({ required: true })
  distance: number;
}

import { ApiProperty } from '@nestjs/swagger';

export class DiscountDto {
  @ApiProperty({ required: true, uniqueItems: true })
  id: string;

  @ApiProperty({ required: true })
  percent: number;

  @ApiProperty({ required: true })
  minPeriod: number;

  @ApiProperty({ required: true })
  maxPeriod: number;
}

import { ApiProperty } from '@nestjs/swagger';

export class DiscountDto {
  @ApiProperty({ required: true, uniqueItems: true })
  id: string;

  @ApiProperty({ required: true })
  percent: number;

  @ApiProperty({ required: true })
  min_period: number;

  @ApiProperty({ required: true })
  max_period: number;
}

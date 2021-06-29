import { ApiProperty } from '@nestjs/swagger';

export class CheckPriceDto {
  @ApiProperty({ required: true })
  start_date: string;

  @ApiProperty({ required: true })
  end_date: string;

  @ApiProperty({ required: true })
  rate_id: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CheckPriceDto {
  @ApiProperty({ required: true })
  startDate: string;

  @ApiProperty({ required: true })
  endDate: string;

  @ApiProperty({ required: true })
  rateId: string;
}

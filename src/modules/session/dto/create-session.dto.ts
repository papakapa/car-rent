import { ApiProperty } from '@nestjs/swagger';

export class CreateSessionDto {
  @ApiProperty({ required: true })
  start_date: string;

  @ApiProperty({ required: true })
  end_date: number;

  @ApiProperty({ required: true, uniqueItems: true })
  car_id: string;

  @ApiProperty({ required: true, uniqueItems: true })
  rate_id: string;

  @ApiProperty({ required: true, uniqueItems: true })
  user_id: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { SessionStatuses } from '../enums/session-status.enum';

export class SessionDto {
  @ApiProperty({ required: true, uniqueItems: true })
  id: string;

  @ApiProperty({ required: true })
  start_date: string;

  @ApiProperty({ required: true })
  end_date: string;

  @ApiProperty({ required: true, uniqueItems: true })
  car_id: string;

  @ApiProperty({ required: true, uniqueItems: true })
  rate_id: string;

  @ApiProperty({ required: true, uniqueItems: true })
  discount_id: string;

  @ApiProperty({ required: true, uniqueItems: true })
  user_id: string;

  @ApiProperty({ required: true })
  price: number;

  @ApiProperty({ enum: ['rented', 'started', 'finished']})
  status: SessionStatuses
}

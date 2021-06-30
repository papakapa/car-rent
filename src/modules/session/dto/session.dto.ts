import { ApiProperty } from '@nestjs/swagger';
import { SessionStatuses } from '../enums/session-status.enum';

export class SessionDto {
  @ApiProperty({ required: true, uniqueItems: true })
  id: string;

  @ApiProperty({ required: true })
  startDate: string;

  @ApiProperty({ required: true })
  endDate: string;

  @ApiProperty({ required: true, uniqueItems: true })
  carId: string;

  @ApiProperty({ required: true, uniqueItems: true })
  rateId: string;

  @ApiProperty({ required: true, uniqueItems: true })
  discountId: string;

  @ApiProperty({ required: true, uniqueItems: true })
  userId: string;

  @ApiProperty({ required: true })
  price: number;

  @ApiProperty({ enum: ['rented', 'started', 'finished']})
  status: SessionStatuses
}

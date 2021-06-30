import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { IsNotWeekend, IsValidDate, IsValidRentRange } from '../decorators/date.decorators';

export class CreateSessionDto {
  @IsValidDate()
  @IsNotWeekend()
  @IsValidRentRange('endDate')
  @ApiProperty({ required: true })
  startDate: string;

  @IsValidDate()
  @IsNotWeekend()
  @ApiProperty({ required: true })
  endDate: string;

  @IsUUID()
  @ApiProperty({ required: true, uniqueItems: true })
  carId: string;

  @IsUUID()
  @ApiProperty({ required: true, uniqueItems: true })
  rateId: string;

  @IsUUID()
  @ApiProperty({ required: true, uniqueItems: true })
  userId: string;
}

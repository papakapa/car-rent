import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { IsNotWeekend, IsValidDate, IsValidRentRange } from '../decorators/date.decorators';

export class CreateSessionDto {
  @IsValidDate()
  @IsNotWeekend()
  @IsValidRentRange('end_date')
  @ApiProperty({ required: true })
  start_date: string;

  @IsValidDate()
  @IsNotWeekend()
  @ApiProperty({ required: true })
  end_date: string;

  @IsUUID()
  @ApiProperty({ required: true, uniqueItems: true })
  car_id: string;

  @IsUUID()
  @ApiProperty({ required: true, uniqueItems: true })
  rate_id: string;

  @IsUUID()
  @ApiProperty({ required: true, uniqueItems: true })
  user_id: string;
}

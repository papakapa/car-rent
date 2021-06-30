import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { IsValidDate } from '../../../core/decorators/date/valid-date.decorator';
import { IsNotWeekend } from '../../../core/decorators/date/is-not-weekend.decorator';
import { IsValidRentRange } from '../../../core/decorators/date/valid-range.decorator';

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

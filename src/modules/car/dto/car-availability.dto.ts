import { ApiProperty } from '@nestjs/swagger';

export class CarAvailabilityDto {
  @ApiProperty()
  carId: string;

  @ApiProperty()
  startDate: string;

  @ApiProperty()
  endDate: string;

  @ApiProperty()
  isAvailable: boolean;

  @ApiProperty()
  rateId: string;

  @ApiProperty()
  discountId: string;

  @ApiProperty()
  price: number;
}

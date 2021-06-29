import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ required: true, uniqueItems: true })
  id: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true, uniqueItems: true })
  login: string;

  @ApiProperty({ required: true })
  email: string;
}

import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@ApiTags('UserController')
@Controller('user')
export class UserController {
  @Get('/')
  @ApiResponse({ type: [UserDto], status: 200 })
  getAll() {

  }

  @Get(':id')
  @ApiResponse({ type: UserDto, status: 200 })
  getById(@Param() param) {

  }
}
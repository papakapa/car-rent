import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('UserController')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get('/')
  @ApiOperation({ summary: 'Возвращает всех пользователей' })
  @ApiResponse({ type: [ UserDto ], status: 200 })
  async getAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Возвращает пользователя по id' })
  @ApiResponse({ type: UserDto, status: 200 })
  async getById(@Param('id') id: string) {
    return await this.userService.getById(id);
  }
}
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSessionDto } from './dto/create-session.dto';
import { SessionDto } from './dto/session.dto';

@ApiTags('SessionController')
@Controller('session')
export class SessionController {
  @Get('/')
  @ApiResponse({ type: [ SessionDto ], status: 200 })
  getAll() {

  }

  @Get(':id')
  @ApiResponse({ type: SessionDto, status: 200 })
  getById(@Param('id') id: string) {

  }

  @Post('create')
  @ApiBody({ type: CreateSessionDto })
  createSession(@Body('data') data: CreateSessionDto) {

  }

  @Post('start')
  startSession(@Body('data') data) {

  }

  @Post('finish')
  finishSession(@Body('data') data) {

  }
}
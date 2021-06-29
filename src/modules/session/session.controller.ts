import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSessionDto } from './dto/create-session.dto';
import { SessionDto } from './dto/session.dto';
import { SessionService } from './session.service';
import { createDeflateRaw } from 'zlib';

@ApiTags('SessionController')
@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {
  }

  @Get('/')
  @ApiResponse({ type: [ SessionDto ], status: 200 })
  async getAll() {
    return await this.sessionService.getAll();
  }

  @Get(':id')
  @ApiResponse({ type: SessionDto, status: 200 })
  async getById(@Param('id') id: string) {
    return await this.sessionService.getById(id);
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
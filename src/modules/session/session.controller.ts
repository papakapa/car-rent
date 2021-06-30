import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSessionDto } from './dto/create-session.dto';
import { SessionDto } from './dto/session.dto';
import { SessionService } from './session.service';
import { ValidationPipe } from './pipes/validation.pipe';

@ApiTags('SessionController')
@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {
  }

  @Get('/')
  @ApiOperation({ summary: 'Возвращает все существующие сессии' })
  @ApiResponse({ type: [ SessionDto ], status: 200 })
  async getAll() {
    return await this.sessionService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Возвращает сессию по id' })
  @ApiResponse({ type: SessionDto, status: 200 })
  async getById(@Param('id') id: string) {
    return await this.sessionService.getById(id);
  }

  @Post(':id/start')
  @ApiOperation({ summary: 'Начинает и возращает соответствующую сессию' })
  @ApiOkResponse({ type: SessionDto })
  async startSession(@Param('id') id: string) {
    return await this.sessionService.startSession(id);
  }

  @Post(':id/finish')
  @ApiOperation({ summary: 'Заканчивает и возращает соответствующую сессию' })
  @ApiOkResponse({ type: SessionDto })
  async finishSession(@Param('id') id: string) {
    return await this.sessionService.endSession(id);
  }

  @Post('book')
  @ApiOperation({ summary: 'Создает и возращает соответствующую сессию' })
  @ApiBody({ type: CreateSessionDto })
  @ApiOkResponse({ type: SessionDto })
  async createSession(@Body(new ValidationPipe()) data: CreateSessionDto) {
    return await this.sessionService.createSession(data);
  }
}
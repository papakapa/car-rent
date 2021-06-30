import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { SessionRepositoryService } from './session-repository.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { RateService } from '../rate/rate.service';
import { DiscountService } from '../discount/discount.service';
import { SessionDto } from './dto/session.dto';
import { SessionStatuses } from './enums/session-status.enum';

@Injectable()
export class SessionService {
  constructor(
    private readonly sessionRepository: SessionRepositoryService,
    private readonly rateService: RateService,
    private readonly discountService: DiscountService,
  ) {
  }

  async getAll() {
    const { rows } = await this.sessionRepository.find();

    return rows;
  }

  async getById(id: string) {
    const { rows } = await this.sessionRepository.findOneById(id);
    const [ result ] = rows;

    return result;
  }

  async createSession(data: CreateSessionDto) {
    await this.validateCar(data.car_id, data.start_date, data.end_date);
    const id = uuidv4();
    const price = await this.rateService.checkPrice({
      rate_id: data.rate_id,
      end_date: data.end_date,
      start_date: data.start_date,
    });
    const discount_id = await this.discountService.checkIsHaveDiscount(data.start_date, data.end_date);
    const session: SessionDto = {
      ...data,
      id,
      price,
      discount_id: discount_id ? discount_id : null,
      status: SessionStatuses.RENTED
    };
    await this.sessionRepository.createSession(session);

    return session;
  }

  async validateCar(carId: string, start: string, end: string) {
    const {rows} = await this.sessionRepository.checkCarSessions(start, end, carId);

    if (rows.length) {
      throw new BadRequestException('Car rented');
    }
  }

  async startSession(sessionId: string) {
    await this.sessionRepository.update(sessionId, SessionStatuses.STARTED);

    return this.getById(sessionId);
  }

  async endSession(sessionId: string) {
    await this.sessionRepository.update(sessionId, SessionStatuses.FINISHED);

    return this.getById(sessionId);
  }
}

import { Injectable } from '@nestjs/common';
import { SessionRepositoryService } from './session-repository.service';

@Injectable()
export class SessionService {
  constructor(private readonly sessionRepository: SessionRepositoryService) {
  }

  async getAll() {
    const { rows } = await this.sessionRepository.find();

    return rows;
  }

  async getById(id: string) {
    const {rows} = await this.sessionRepository.findOneById(id);
    const [result] = rows;

    return result;
  }
}

import { Injectable } from '@nestjs/common';
import { UserRepositoryService } from './user-repository.service';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepositoryService) {
  }

  async getAll() {
    const { rows } = await this.userRepository.find();

    return rows;
  }

  async getById(id: string) {
    const {rows} = await this.userRepository.findOneById(id);
    const [result] = rows;

    return result;
  }
}

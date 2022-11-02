import { Injectable } from '@nestjs/common';
import { TransactionsRepository } from './transactions.repository';

@Injectable()
export class TransactionsService {
  constructor(public transactionsRepo: TransactionsRepository) {}

  findOne(id: string) {
    return this.transactionsRepo.findOne(id);
  }

  findAll() {
    return this.transactionsRepo.findAll();
  }
}

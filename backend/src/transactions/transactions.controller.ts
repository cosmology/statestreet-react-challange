import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(public transactionService: TransactionsService) {}

  @Get()
  listTransactions() {
    return this.transactionService.findAll();
  }

  @Get('/:id')
  async getTransaction(@Param('id') id: string) {
    const transaction = await this.transactionService.findOne(id);

    if (!transaction) {
      throw new NotFoundException('transaction not found');
    }

    return transaction;
  }
}

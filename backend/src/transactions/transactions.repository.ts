import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class TransactionsRepository {
  async findOne(id: string) {
    const contents = await readFile('./data/data.json', 'utf8');

    const { transactions } = JSON.parse(contents);
    const result = transactions.find((item) => item.account === id);

    return result; //transactions[id];
  }

  async findAll() {
    const contents = await readFile('../data/data.json', 'utf8');
    const transactions = JSON.parse(contents);

    return transactions;
  }

  async create(content: string) {
    const contents = await readFile('../data/data.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);

    messages[id] = { id, content };

    await writeFile('../data/data.json', JSON.stringify(messages));
  }
}

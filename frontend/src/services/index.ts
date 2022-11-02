import axios from 'axios';
import { TransactionsApiData } from '../types';

import { getTransactionsApiUrl } from '../config';

export async function getTransactions() {
  const transactionsApiUrl = getTransactionsApiUrl();
  try {
    const response = await axios.get<TransactionsApiData>(transactionsApiUrl);
    return response.data || [];
  } catch (error: any) {
    throw new Error(
      `Error in 'getTransactions (${transactionsApiUrl})': ${error.message}`
    );
  }
}

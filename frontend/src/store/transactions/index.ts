import { atom, selector } from 'recoil';
import { getTransactions } from '../../services';
import { TransactionItem } from '../../types';

export const selectedTransactionAccountState = atom<string>({
  key: 'selectedTransactionAccountState',
  default: '',
});

export const allTransactionsState = selector<TransactionItem[]>({
  key: 'transactionListState',
  get: async ({ get }) => {
    try {
      const response = await getTransactions();
      return response.transactions || [];
    } catch (error) {
      console.error(
        `allTransactionsState selector getTransactions() ERROR: \n${error}`
      );
      return [];
    }
  },
});

export const transactionListState = atom<TransactionItem[]>({
  key: 'allTransactionsState',
  default: allTransactionsState,
});

// TODO: change this structure to { transTypes: [], transNames: [] },
const transactionsFilter = atom<any>({
  key: 'transFilter',
  default: new Set<string>(),
});

// TODO: fix to filter by both keys
const filteredTransactions = selector({
  key: 'filteredTrans',
  get: ({ get }) => {
    const filters = get(transactionsFilter);
    const list = get(transactionListState);

    if (filters.size) {
      let trans = list.filter((t) => {
        return filters.has(t.transactionType) || filters.has(t.accountName);
      });
      return trans;
    }
    return list;
  },
});

export { transactionsFilter, filteredTransactions };

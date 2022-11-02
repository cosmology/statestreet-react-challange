type TransactionItem = {
  account?: string;
  accountName?: string;
  amount?: number;
  bic?: string;
  currencyCode?: string;
  currencyName?: string;
  currencySymbol?: string;
  mask?: string;
  transactionType: string;
};

type TransactionFilterChange = {
  types: string[];
  onFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type Function = (transaction: TransactionItem) => boolean;

type Filter = {
  name: string | number;
  type: TransactionType;
  fnc: Function;
};

type FiltersProps = {
  filters: Filter[];
  setFilters: Dispatch<SetStateAction<Filter[]>>;
  amountVisible: number;
  amountTotal: number;
};

type PathRouteCustomProps = {
  transactions: TransactionItem[];
};

type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>;

export interface IGetTransactionsListResponse {
  transactions: TransactionItem[];
}

export interface IGetTransactionResponse {
  transaction: TransactionItem;
}

export type TransactionsApiData = { transactions: TransactionItem[] };

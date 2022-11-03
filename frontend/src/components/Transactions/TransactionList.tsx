import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilStateLoadable, useRecoilValue } from 'recoil';
import {
  selectedTransactionAccountState,
  transactionListState,
  filteredTransactions,
} from '../../store/transactions';
import { TransactionsRowView } from './TransactionRow';
import TablePagination from '@mui/material/TablePagination';
import { TransactionItem } from '../../types';

const ROWS_PER_PAGE = 10;

export default function TransactionList() {
  const [transactions] = useRecoilStateLoadable(transactionListState);
  const [, setSelectedTransactionAccount] = useRecoilState(
    selectedTransactionAccountState
  );
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(ROWS_PER_PAGE);

  const filteredTrans = useRecoilValue(filteredTransactions);

  useEffect(() => {
    return () => {
      // console.log('cleanup');
    };
  }, []);

  const handleTransactionClick =
    (account?: string) =>
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      const selectedAccount = account || '';
      setSelectedTransactionAccount(selectedAccount);
    };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (transactions.state === 'hasError') {
    return <div> There is some problem! </div>;
  }

  if (transactions.state === 'loading') {
    return <div>Loading...</div>;
  }

  if (transactions.state === 'hasValue') {
    return (
      <>
        <Paper elevation={0}>
          <TableContainer sx={{ maxHeight: '100vh' }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>ACCOUNT NO.</TableCell>
                  <TableCell align="left">ACCOUNT NAME</TableCell>
                  <TableCell align="left">CURRENCY</TableCell>
                  <TableCell align="left">AMOUNT</TableCell>
                  <TableCell align="left">TRANSACTION TYPE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredTrans
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((transaction: TransactionItem, index: number) => (
                    <TransactionsRowView
                      key={transaction.account}
                      transaction={transaction}
                      handleTransactionClick={handleTransactionClick}
                    />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={filteredTrans.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </>
    );
  }

  return <div>No transactions...</div>;
}

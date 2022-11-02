import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { TransactionItem } from '../../types';

interface TransactionListProps {
  transaction: TransactionItem;
  handleTransactionClick: (
    userId?: string
  ) => (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const TransactionsRowView: FC<TransactionListProps> = (props) => {
  const { transaction } = props;
  return (
    <>
      <StyledTableRow hover key={transaction.account}>
        <TableCell component="th" scope="row">
          <Link
            to={`/transactions/${transaction.account}`}
            style={{ textDecoration: 'none', color: 'indigo' }}>
            {transaction.account}
          </Link>
        </TableCell>
        <TableCell align="left">{transaction.accountName}</TableCell>
        <TableCell align="left">{transaction.currencyCode}</TableCell>
        <TableCell align="left">{transaction.amount}</TableCell>
        <TableCell align="left">{transaction.transactionType}</TableCell>
      </StyledTableRow>
    </>
  );
};

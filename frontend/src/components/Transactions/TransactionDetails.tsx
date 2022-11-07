import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TransactionItem } from '../../types';
import { api } from '../../config';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Loading from '../Loading';

const BASE_URL = `${api.baseUrl}:${api.serverPort}`;

const Transaction = React.memo(() => {
  const { id } = useParams();

  const [transaction, setTransaction] = useState<TransactionItem>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTransaction = async () => {
      await axios
        .get<TransactionItem | undefined>(
          `${BASE_URL}${api.endpoints.transactions}${id}`
        )
        .then((response) => {
          setTransaction(response.data);
          setIsLoading(false);
        })
        .catch((err: any) => {
          console.error(err);
          setIsLoading(false);
        });
    };
    getTransaction();
    return () => {
      //console.log('cleanup');
    };
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : transaction ? (
        <>
          <Toolbar sx={{ pt: '3rem' }}>
            <Typography variant="h4">
              Transaction {transaction.account}
            </Typography>
          </Toolbar>
          <Divider sx={{ pt: '1rem', mb: '1rem' }} />
          <Card elevation={0}>
            <CardContent>
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="body1"
                component="div">
                Account No:{' '}
                <Typography display={'inline'}>
                  {transaction.account}
                </Typography>
              </Typography>
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="body1"
                component="div">
                Account Name:{' '}
                <Typography display={'inline'}>
                  {transaction.accountName}
                </Typography>
              </Typography>
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="body1"
                component="div">
                Currency Code:{' '}
                <Typography display={'inline'}>
                  {transaction.currencyCode}
                </Typography>
              </Typography>
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="body1"
                component="div">
                Amount:{' '}
                <Typography display={'inline'}>{transaction.amount}</Typography>
              </Typography>
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="body1"
                component="div">
                Transaction Type:{' '}
                <Typography display={'inline'}>
                  {transaction.transactionType}
                </Typography>
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={`/transactions`}>Back to transactions</Link>
            </CardActions>
          </Card>
        </>
      ) : null}
    </>
  );
});

export default Transaction;

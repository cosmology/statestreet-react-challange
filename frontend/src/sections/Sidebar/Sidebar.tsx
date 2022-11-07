import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import Typography from '@mui/material/Typography';
import { TransactionFilterChange } from '../../types';
import { transactionsFilter } from '../../store/transactions';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import usePrevious from '../../hooks/usePrevious';
import { styled } from '@mui/material/styles';

// TODO: remove this hack with theme
const DRAWER_WIDTH = 270;
const TRANSACTION_TYPES = ['deposit', 'invoice', 'withdrawal', 'payment'];
const TRANSACTION_ACCOUNTS = [
  'Savings Account',
  'Checking Account',
  'Auto Loan Account',
  'Credit Card Account',
  'Investment Account',
  'Personal Loan Account',
  'Money Market Account',
  'Home Loan Account',
];

function TransactionFilters(props: TransactionFilterChange) {
  const { types, onFilterChange } = props;

  return (
    <section>
      <FormGroup>
        {types.map((type) => (
          <FormControlLabel
            key={type}
            control={<Checkbox value={type} onChange={onFilterChange} />}
            label={type}
          />
        ))}
      </FormGroup>
    </section>
  );
}

const StyledFilterBox = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.augmentColor.toString()
      : '#F5F5F5',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  color: theme.palette.text.primary,
  border: 'solid 1px',
  borderColor:
    theme.palette.mode === 'dark' ? theme.palette.divider : '#E0E0E0',
  borderRadius: 10,
}));

function Sidebar() {
  const [filters, setFilters] = useState(new Set<string>());

  // Custom hook previous filters (was passed into hook on last filters render)
  const previousFilters: Set<string> = usePrevious<Set<string>>(filters);

  const [, setStoreFilters] = useRecoilState(transactionsFilter);

  const handleFilterChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFilters((prevFilters) => {
        // using custom usePrevious hook but can use prevFilters instead
        let filters = new Set(previousFilters);

        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        return filters;
      });
    },
    [previousFilters] // we don't need this dependency
  );

  useEffect(() => {
    setStoreFilters(filters);
  }, [setStoreFilters, filters]);

  return (
    <Box sx={{ width: DRAWER_WIDTH, p: 2 }}>
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        FILTERS
      </Typography>
      <StyledFilterBox>
        <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
          Account name
        </Typography>
        <TransactionFilters
          types={TRANSACTION_ACCOUNTS}
          onFilterChange={handleFilterChange}
        />
      </StyledFilterBox>
      <StyledFilterBox>
        <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
          Transaction Type
        </Typography>
        <TransactionFilters
          types={TRANSACTION_TYPES}
          onFilterChange={handleFilterChange}
        />
      </StyledFilterBox>
    </Box>
  );
}

export default Sidebar;

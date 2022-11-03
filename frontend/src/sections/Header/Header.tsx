import { Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function Header() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar sx={{ p: 3 }}>
          <Typography variant="h4">My Transactions</Typography>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <p>Count: {count}</p>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}

export default Header;

import { Divider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <Box>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar sx={{ p: 3 }}>
          <Typography variant="h4">My Transactions</Typography>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}

export default Header;

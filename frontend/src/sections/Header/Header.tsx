import { useRecoilState } from 'recoil';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Moon from '@mui/icons-material/DarkMode';
import Sun from '@mui/icons-material/LightMode';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import useTheme from '../../store/theme';
import { themeModeState } from '../../store/theme';

function Header() {
  const [, themeActions] = useTheme();
  const [currentTheme] = useRecoilState(themeModeState);
  return (
    <Box>
      <AppBar color="transparent" elevation={0} position="static">
        <Toolbar sx={{ p: 3, justifyContent: 'space-between' }}>
          <Typography variant="h4">My Transactions</Typography>
          <Tooltip disableInteractive title="Switch theme" arrow>
            <IconButton
              sx={{ height: 'fit-content', alignSelf: 'center' }}
              color="primary"
              size="large"
              edge="end"
              onClick={themeActions.toggle}>
              {currentTheme === 'light' ? <Moon /> : <Sun />}
            </IconButton>
          </Tooltip>
        </Toolbar>
        <Divider />
      </AppBar>
    </Box>
  );
}

export default Header;

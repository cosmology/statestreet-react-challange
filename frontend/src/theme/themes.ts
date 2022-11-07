import { ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { lightBlue } from '@mui/material/colors';

import { Themes } from './types';

const sharedTheme = {
  palette: {
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
} as ThemeOptions;

const themes: Record<Themes, ThemeOptions> = {
  light: deepmerge(sharedTheme, {
    palette: {
      mode: 'light',
      background: {
        default: '#fafafa',
        paper: '#fafafa',
      },
      primary: {
        main: '#3f51b5',
      },
    },
  }),

  dark: deepmerge(sharedTheme, {
    palette: {
      mode: 'dark',
      background: {
        default: 'rgb(1,43,95)',
        paper: 'rgb(1,43,95)',
      },
      primary: {
        main: lightBlue[200],
      },
      secondary: {
        main: lightBlue[500],
      },
      action: {
        hover: 'rgba(15,41,73, .5)',
        hoverOpacity: 0.2,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: '#6b6b6b #2b2b2b',
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              backgroundColor: 'rgba(15,41,73, .5)',
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 8,
              backgroundColor: lightBlue[900],
              minHeight: 24,
            },
            '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
              {
                backgroundColor: lightBlue[700],
              },
          },
        },
      },
    },
  }),
};

export default themes;

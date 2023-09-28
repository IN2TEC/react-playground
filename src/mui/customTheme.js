import { createMuiTheme as createThemeV4 } from '@material-ui/core/styles';
import { createTheme as createThemeV5 } from '@mui/material/styles';

export const themeV4 = createThemeV4({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
});

export const themeV5 = createThemeV5({
  palette: {
    primary: {
      main: themeV4.palette.primary.main,
    },
  },
});

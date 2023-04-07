import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';
import React from 'react';

type ThemeProps = {
    children: React.ReactNode;
};

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
      light: '#4b4f53',
      dark: '#15181c'
    },


secondary:{
    main: '#1f883d',
    light: '#4b9f63',
    dark: '#155f2a',
}
}, 
});
export function Theme({children}:ThemeProps) {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;
}
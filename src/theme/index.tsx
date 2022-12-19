import { useMemo, ReactNode, useContext, useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import breakpoints from './breakpoints';
import { Context } from "../context";

type Props = {
  children: ReactNode;
};

const COLOR = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#1C1C1C',
  900: '#161C24',
};

const FONT_PRIMARY = 'Roboto, sans-serif';

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
} as const;

export default function ThemeProvider({ children }: Props) {
  const { toogleDark } = useContext(Context);
  const isDark = 'dark';

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: {
        mode: 'dark',
        text: { primary: toogleDark ? '#ffffff' : '#000', secondary: COLOR[500], disabled: COLOR[600] },
        background: { paper: toogleDark ? COLOR[800] : COLOR[100], default: toogleDark ? COLOR[800] : COLOR[100], body: 'red' },
        action: { active: COLOR[500] },
      },
      breakpoints,
      typography,
    }),
    [isDark, toogleDark]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import type { ThemeProviderProps } from "@emotion/react";

const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

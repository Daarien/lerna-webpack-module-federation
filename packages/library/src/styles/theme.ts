import { createTheme, Theme } from "@material-ui/core/styles";
import { orange, blue } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    status: {
      dzen: string;
      danger: string;
    };
  }
  interface PaletteOptions {
    status: {
      dzen: string;
      danger: string;
    };
  }
}

export type { Theme };

export default createTheme({
  shape: {
    borderRadius: 8,
  },
  palette: {
    type: "light",
    primary: {
      main: "#29a329",
    },
    secondary: {
      main: "#a6a6a6",
    },
    status: {
      dzen: blue[300],
      danger: orange[500],
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "unset",
      },
    },
  },
});

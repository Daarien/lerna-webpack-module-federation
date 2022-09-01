import { createTheme } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

export default createTheme({
  shape: {
    borderRadius: 8,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#29a329",
    },
    secondary: {
      main: "#a6a6a6",
    },
    status: {
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

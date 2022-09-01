import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    border: "1px solid",
    borderRadius: theme.shape.borderRadius,
    borderColor:
      theme.palette.mode === "light"
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
  },
}));

export default function Panel({ children }) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}

import { createStyles, Theme } from "@mf/flamingo";

export default (theme: Theme) =>
  createStyles({
    btn: {
      display: "flex",
      padding: theme.spacing(1, 2),
      color: theme.palette.status.dzen,
      backgroundColor: theme.palette.status.danger,
      borderRadius: theme.shape.borderRadius,
    },
  });

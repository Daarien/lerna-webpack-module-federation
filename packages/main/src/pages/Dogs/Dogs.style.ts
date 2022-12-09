import { createStyles, Theme } from "@mf/flamingo";

export default (theme: Theme) =>
  createStyles({
    btn: {
      display: "inline-flex",
      padding: theme.spacing(1, 2),
      backgroundColor: theme.palette.status.dzen,
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.common.white,
      cursor: 'pointer'
    },
  });

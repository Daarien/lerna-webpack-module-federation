import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useEventService } from "shared-context";

const useStyles = makeStyles((theme) => ({
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

  const EventService = useEventService();

  useEffect(() => {
    EventService.subscribe("watch", () => {
      console.info("Watching...");
    });

    EventService.subscribe("boom", () => {
      console.error("Bah!!!");
    });
  }, []);

  return <div className={classes.root}>{children}</div>;
}

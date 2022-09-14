import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useEventService } from "shared-context";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid",
    borderRadius: theme.shape.borderRadius,
    borderColor:
    theme.palette.primary.main
  },
}));

export default function Panel({ children }) {
  const classes = useStyles();

  const EventService = useEventService();

  useEffect(() => {
    // @ts-ignore
    EventService.subscribe("watch", () => {
      console.info("Watching...");
    });

    // @ts-ignore
    EventService.subscribe("boom", () => {
      console.error("Bah!!!");
    });
  }, []);

  return <div className={classes.root}>{children}</div>;
}
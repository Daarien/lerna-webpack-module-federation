import { useEffect } from "react";
import { Typography, Button, Box, BoxProps, makeStyles } from "@mf/flamingo";
import { useEventService } from "@mf/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: {
    border: "1px solid",
    borderRadius: theme.shape.borderRadius,
    borderColor: theme.palette.primary.main,
    color: theme.palette.status.dzen,
    display: "inline-block",
    padding: 16,
  },
  btn: {
    marginTop: 16,
  }
}));

interface Props extends BoxProps {}

export default function EventsWidget({ className, ...props }: Props) {
  const classes = useStyles();

  const EventService = useEventService();

  useEffect(() => {
    EventService.subscribe("watch", () => {
      console.info("EventsWidget Watching...");
    });

    EventService.subscribe("boom", () => {
      console.warn("EventsWidget Boom!!!");
    });
    
  }, []);

  function handleBtnClick() {
    EventService.dispatch("boom");
  }

  return (
    <Box className={clsx(classes.root, className)} {...props}>
      <Typography variant="h5">EventsWidget</Typography>
      <Button onClick={handleBtnClick} className={classes.btn}>Dispatch "boom"</Button>
    </Box>
  );
}

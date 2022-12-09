import { inject, observer } from "mobx-react";
import { Box, Button, makeStyles } from "@mf/flamingo";
import type { StoreProps } from "store";

const useStyles = makeStyles({
  btn: {
    marginRight: 16,
  },
});

interface Props extends StoreProps<"counter"> {}

function Counter({ counter }: Props) {
  const classes = useStyles();

  function handleIncrement() {
    counter.increment();
  }
  function handleReset() {
    counter.reset();
  }

  return (
    <div>
      <p>
        <Button onClick={handleIncrement} className={classes.btn}>
          Increment counter
        </Button>
        <Button onClick={handleReset}>Reset counter</Button>
      </p>
      <p>
        <Watcher />
      </p>
    </div>
  );
}

Counter.defaultProps = {} as StoreProps<"counter">;

export default inject("counter")(Counter);

function Watch({ counter }: StoreProps<"counter">) {
  return <Box component="span">{counter.count}</Box>;
}

Watch.defaultProps = {} as StoreProps<"counter">;

const Watcher = inject("counter")(observer(Watch));

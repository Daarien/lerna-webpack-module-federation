import type { HTMLAttributes } from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const styles = createStyles({
  root: {
    display: "flex",
  },
  directionColumn: {
    flexDirection: "column",
    alignItems: 'flex-start',
  },
});

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  classes?: Record<"root" | "directionColumn", string>;
  direction?: "row" | "column";
}

function Flex({ classes, direction, className, children }: FlexProps) {
  return (
    <div
      className={clsx(
        classes.root,
        { [classes.directionColumn]: direction === "column" },
        className
      )}
    >
      {children}
    </div>
  );
}

export default withStyles(styles)(Flex);

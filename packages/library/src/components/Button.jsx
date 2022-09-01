import { Button as MuiButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";

function Button(props) {
  const { classes, children, className, ...other } = props;
  return (
    <MuiButton className={clsx(classes.root, className)} {...other}>
      {children}
    </MuiButton>
  );
}

export default withStyles(
  {
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      color: "white",
    },
  },
  { name: "FriendButton" }
)(Button);

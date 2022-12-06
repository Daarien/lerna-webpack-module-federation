import { Box, Typography, makeStyles } from "@mf/flamingo";
import Navigation from "./Navigation";

const useStyles = makeStyles({
  header: {
    marginRight: 32,
  }
})

export default function Header() {
  const classes = useStyles();
  return (
    <Box display="flex">
      <Typography variant="h4" className={classes.header}>Host</Typography>
      <Navigation />
    </Box>
  );
}

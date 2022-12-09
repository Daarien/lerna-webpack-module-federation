import { Box, Typography, makeStyles } from "@mf/flamingo";
import Navigation from "./Navigation";

const useStyles = makeStyles({
  header: {
    marginRight: 32,
  }
})

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const classes = useStyles();
  return (
    <Box display="flex">
      <Typography variant="h4" className={classes.header}>{title}</Typography>
      <Navigation />
    </Box>
  );
}

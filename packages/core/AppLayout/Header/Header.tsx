import { useContext } from 'react'
import { Box, Typography, makeStyles } from "@mf/flamingo";
import Navigation from "./Navigation";
import { NavigationContext } from '../NavigationProvider';

const useStyles = makeStyles({
  header: {
    marginRight: 32,
  },
});

export interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const classes = useStyles();
  const {scheme} = useContext(NavigationContext);
  return (
    <Box display="flex">
      <Typography variant="h4" className={classes.header}>
        {title}
      </Typography>
      {scheme ? <Navigation scheme={scheme} /> : null}
    </Box>
  );
}

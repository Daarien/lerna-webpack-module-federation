import { Box } from "library";
import Navigation from "../Navigation";

export default function Header() {
  return (
    <Box display="flex">
      <h1>Host</h1>
      <Navigation />
    </Box>
  );
}

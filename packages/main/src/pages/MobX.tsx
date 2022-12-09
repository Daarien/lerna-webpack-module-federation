import Timer from "../components/Timer";
import Counter from "../components/Counter";
import { Box } from "@mf/flamingo";

export default function MobX() {
  return (
    <Box sx={{ pt: 5 }}>
      <Timer />

      <hr />

      <Counter />
    </Box>
  );
}

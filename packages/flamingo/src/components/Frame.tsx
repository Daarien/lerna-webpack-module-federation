import { Box, BoxProps } from "@material-ui/core";

interface Props extends BoxProps {}

export default function Frame({ children, sx }: Props) {
  return (
    <Box
      sx={{
        border: "1px solid pink",
        borderRadius: 8,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

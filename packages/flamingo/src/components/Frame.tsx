import { Box, BoxProps } from "@material-ui/core";

export interface FrameProps extends BoxProps {}

export default function Frame({ sx, ...props }: FrameProps) {
  return (
    <Box
      sx={{
        display: "inline-block",
        border: "1px solid pink",
        borderRadius: 8,
        padding: 8,
        ...sx,
      }}
      {...props}
    />
  );
}

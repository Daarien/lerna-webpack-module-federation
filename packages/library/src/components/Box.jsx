import { Box as MuiBox } from "@material-ui/core";

export default function Box({ children, sx }) {
  return (
    <MuiBox
      sx={{
        border: "1px solid pink",
        borderRadius: 8,
        ...sx,
      }}
    >
      {children}
    </MuiBox>
  );
}

import { Button as MuiButton, ButtonProps } from "@mui/material";

export type { ButtonProps };

export default function Button({ children }: ButtonProps) {
  return <MuiButton>{children}</MuiButton>;
}

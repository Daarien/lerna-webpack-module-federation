import { Typography } from "@mf/flamingo";

export default function AppLayout({ title, children }) {
  return (
    <div>
      <Typography variant="h4">{title}</Typography>
      <main>{children}</main>
    </div>
  );
}

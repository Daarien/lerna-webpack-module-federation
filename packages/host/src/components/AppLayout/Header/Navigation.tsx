import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, Tab } from "@mf/flamingo";

export default function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleChange(e, pathname: string) {
    navigate(pathname);
  }

  return (
    <nav>
      <Tabs value={pathname} onChange={handleChange}>
        <Tab value="/" label="Main" />
        <Tab value="/dogs" label="Dogs" />
      </Tabs>
    </nav>
  );
}

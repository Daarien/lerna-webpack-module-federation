import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, Tab } from "@mf/flamingo";
import type { NavigationScheme } from "../NavigationProvider";

export interface NavigationProps {
  scheme: NavigationScheme;
}

export default function Navigation({ scheme }: NavigationProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function handleChange(e, pathname: string) {
    navigate(pathname);
  }

  return (
    <nav>
      <Tabs value={pathname} onChange={handleChange}>
        {scheme.map(tab => (
          <Tab value={tab.path} label={tab.label} />
        ))}
      </Tabs>
    </nav>
  );
}

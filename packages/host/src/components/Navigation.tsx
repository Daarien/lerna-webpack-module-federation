import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, Tab } from "library";

export default function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log("🚀 ~ Navigation ~ location pathname", pathname);
  function handleChange(e, pathname: string) {
    console.log(
      "🚀 ~ file: Navigation.tsx:9 ~ handleChange ~ pathname",
      pathname
    );
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

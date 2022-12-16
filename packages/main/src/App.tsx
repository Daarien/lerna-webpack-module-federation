import { Routes, Route } from "react-router-dom";
import Player from "@mf/core/Player";
import type { NavigationScheme } from "@mf/core/AppLayout/NavigationProvider";
import Main from "pages/Main";
import MobX from "pages/MobX";
import Dogs from "pages/Dogs";

const scheme: NavigationScheme = [
  { label: "Main", path: "/" },
  { label: "MobX", path: "/mobx" },
  { label: "Dogs", path: "/dogs" },
];

export default function App() {
  return (
    <Player title="Main project" navigationScheme={scheme}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mobx" element={<MobX />} />
        <Route path="/dogs" element={<Dogs />} />
      </Routes>
    </Player>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mf/flamingo";
import Main from "pages/Main";
import MobX from "pages/MobX";
import Dogs from "pages/Dogs";
import AppLayout from "components/AppLayout";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppLayout title="Main project">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/mobx" element={<MobX />} />
            <Route path="/dogs" element={<Dogs />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

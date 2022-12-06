import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mf/flamingo";
import Main from "./pages/Main";
import Dogs from "./pages/Dogs";
import AppLayout from "./components/AppLayout";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dogs" element={<Dogs />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

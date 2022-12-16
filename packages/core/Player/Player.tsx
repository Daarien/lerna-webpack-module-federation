import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mf/flamingo";
import AppLayout from "../AppLayout";
import { EventServiceProvider } from "../services";
import NavigationProvider, { NavigationScheme } from "../AppLayout/NavigationProvider";

interface PlayerProps {
  title: string;
  children: ReactNode ;
  navigationScheme?: NavigationScheme;
}

export default function Player({ title, navigationScheme, children }: PlayerProps) {
  return (
    <EventServiceProvider>
      <ThemeProvider>
        <BrowserRouter>
          <NavigationProvider navigationScheme={navigationScheme}>
            <AppLayout title={title}>{children}</AppLayout>
          </NavigationProvider>
        </BrowserRouter>
      </ThemeProvider>
    </EventServiceProvider>
  );
}

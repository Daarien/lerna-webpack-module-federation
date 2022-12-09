import type { ReactNode } from 'react';
import Header from "./Header";

export interface AppLayoutProps {
  title: string;
  children: ReactNode;
}

export default function AppLayout({ title, children }: AppLayoutProps) {
  return (
    <div>
      <Header title={title} />
      <main>{children}</main>
    </div>
  );
}

///<reference types="react" />
// import type { AppLayoutProps } from '@mf/main';

declare module "main/AppLayout" {
  const AppLayout: React.ComponentType<React.PropsWithChildren<{title: string}>>;
  export default AppLayout;
}

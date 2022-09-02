import Header from "../Header";

export default function AppLayout({ children }) {
  return (
    <div>
      <Header>Layout header</Header>
      <main>{children}</main>
    </div>
  );
}

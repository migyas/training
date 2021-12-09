import { Navbar } from "../components/Navbar/index,";

export function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

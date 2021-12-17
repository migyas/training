import { Navbar } from "../components/Navbar/index,";

export function Layout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <main style={{ width: "100%", marginLeft: "28rem" }}>{children}</main>
    </div>
  );
}

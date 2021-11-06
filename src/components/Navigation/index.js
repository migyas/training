import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav>
      <a href="/">Dashboard</a>
      <Link to="/transfers">Transfer</Link>
      <a href="/">Dashboard</a>
      <a href="/">Dashboard</a>
      <a href="/">Dashboard</a>
    </nav>
  );
}

import { Button } from "../components/Button";
import { Cashback } from "../components/Cashback";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import { Profile } from "../components/Profile";

export function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>
        <Profile />
        <Navigation />
        <Cashback />
        <Button />
      </div>
      <main>{children}</main>
    </div>
  );
}

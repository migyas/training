import { Routes as Switch, Route } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Switch>
  );
}

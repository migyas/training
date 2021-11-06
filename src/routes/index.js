import { Routes as Switch, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Transfers } from "../pages/Transfers";

const Routes = () => (
  <Switch>
    <Route path="/" element={<Dashboard />} />
    <Route path="/transfers" element={<Transfers />} />
  </Switch>
);

export default Routes;

import { Routes as Switch, Route } from "react-router-dom";
import { routes } from "./Routes";

export function Routes() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
    </Switch>
  );
}

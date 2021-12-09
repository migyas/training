import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { User } from "../pages/User";

export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/register",
    component: <Register />,
  },
  {
    path: "/user",
    component: <User />,
  },
];

import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { Students } from "../pages/Students";

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
    path: "/students",
    component: <Students />,
  },
];

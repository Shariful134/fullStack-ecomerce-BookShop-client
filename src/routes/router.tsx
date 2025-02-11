import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./admine.routes";
import { UsersPaths } from "./User.routes";
import ProtectedRoutes from "../components/layout/ProtectedRoutes";
import { homePaths } from "./home.routes";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <ProtectedRoutes role="admin">
        <App></App>
      </ProtectedRoutes>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoutes role="user">
        <App></App>
      </ProtectedRoutes>
    ),
    children: routeGenerator(UsersPaths),
  },
  {
    path: "/",
    element: <App></App>,
    children: routeGenerator(homePaths),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
]);

export default router;

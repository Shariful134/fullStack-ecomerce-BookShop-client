import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;

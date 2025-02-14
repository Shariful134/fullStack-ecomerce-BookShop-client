import UpdatedBook from "../components/admin/UpdatedBook";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateBook from "../pages/admin/CreateBook";

import Users from "../pages/admin/Users";
import SingleBooks from "../pages/books/SingleBooks";
import Home from "../pages/home/Home";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Home",
    path: "home",
    element: <Home></Home>,
  },
  {
    path: "single-book/:bookId",
    element: <SingleBooks></SingleBooks>,
  },
  {
    path: "updated-book/:bookId",
    element: <UpdatedBook></UpdatedBook>,
  },
  {
    name: "All Users",
    path: "get-users",
    element: <Users></Users>,
  },
  {
    name: "Book Management",
    children: [
      {
        name: "Create Book",
        path: "create-book",
        element: <CreateBook></CreateBook>,
      },
    ],
  },
];

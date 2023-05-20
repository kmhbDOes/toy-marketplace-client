import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
// import AddToy from "../Pages/Toy/AddToy";
import AllToys from "../Pages/Toy/AllTOys";
import MyToys from "../Pages/Toy/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      // {
      //   path: "/add-toy",
      //   element: <AddToy></AddToy>,
      // },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;

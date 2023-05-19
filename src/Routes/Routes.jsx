
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/All Products/AllProducts";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'allproducts',
          element: <AllProducts></AllProducts>
      },
      {
        path: 'login',
        element: <Login></Login>
    },

      ]
    },
  ]);


  export default router;
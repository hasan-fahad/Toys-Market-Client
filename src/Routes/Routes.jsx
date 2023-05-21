
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/All Products/AllProducts";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProductDescription from "../Pages/ProductDescription/ProductDescription";

import MyToy from "../Pages/MyToy/MyToy";
import AddToy from "../Pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";


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
      {
      path: 'signup',
      element: <SignUp></SignUp>
      },
      {
        path: 'alltoys',
        element: <ProductDescription></ProductDescription>,
      },
      {
        path: 'mytoy/:id',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/allproducts/${params.id}`)
      },

      {
        path: 'addtoy',
        element: <PrivateRoute><AddToy></AddToy>
        </PrivateRoute>
      }
      

    
      ]
    },
  ]);


  export default router;
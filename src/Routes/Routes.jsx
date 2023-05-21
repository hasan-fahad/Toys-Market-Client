
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/All Products/AllProducts";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProductDescription from "../Pages/ProductDescription/ProductDescription";
import AddaToy from "../Pages/addaToy/addaToy";


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
        element: <ProductDescription></ProductDescription>
      },
      {
        path: 'addatoy/:id',
        element: <AddaToy></AddaToy>,
        loader: ({params}) => fetch(`http://localhost:5000/allproducts/${params.id}`)
      }

    
      ]
    },
  ]);


  export default router;
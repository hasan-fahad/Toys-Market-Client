import { useEffect, useState } from "react";
import Products from "./Products";


const AllProducts = () => {

    const [allProducts, setAllProducts] =useState([]);

    useEffect(()=> {
        fetch('https://toys-market-server-hasan-fahad.vercel.app/allproducts')
        .then(res=> res.json())
        .then(data => setAllProducts(data))
    })
    return (
        <div className="mt-3">
        <div className="flex justify-center my-4">
            <h1 className="text-3xl font-bold text-red-600">All Products</h1>
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    allProducts.map(product=> <Products key={product.id}
                    product={product}>

                    </Products>)
                }
        

        </div>
        </div>
    );
};

export default AllProducts;
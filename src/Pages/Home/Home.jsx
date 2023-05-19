import About from "./About";
import Banner from "./Banner";
import ShopByCategory from "./ShopByCategory/ShopByCategory";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ShopByCategory></ShopByCategory>
            <div className="flex justify-center my-5">
                <button className=" btn btn-wide btn-outline btn-primary ">All Products</button>
            </div>
            
        </div>
    );
};

export default Home;
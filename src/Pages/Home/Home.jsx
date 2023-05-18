import About from "./About";
import Banner from "./Banner";
import ShopByCategory from "./ShopByCategory/ShopByCategory";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ShopByCategory></ShopByCategory>
            <h1>This is home </h1>
        </div>
    );
};

export default Home;
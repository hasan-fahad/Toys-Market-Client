
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useEffect, useState } from 'react';
import car1 from '../../../assets/Images/car1.jpg'
import car2 from '../../../assets/Images/car2.jpg'
import bus1 from '../../../assets/Images/bus1.jpg'
import bus2 from '../../../assets/Images/bus2.jpg'
import robot1 from '../../../assets/Images/robot1.jpeg'
import robot2 from '../../../assets/Images/robot2.jpeg'


const ShopByCategory = () => {
    // const [shopCategorys, setShopCategory] = useState([]);
  
    // useEffect (()=>{

    //     fetch('product.json','Cars.json')
    //     .then(res=>res.json())
    //     .then(data => setShopCategory(data));
    // },[])
  return (
    <div>
      <div className='mt-4'>
        <div className='text-center'>
        <h3 className='text-5xl my-3 font-bold text-red-600'>Shop by Category</h3>
        <h2 className='text-2xl'>Here is Our some products. If you want more, please tap the all toys button in the top. Thank You!</h2>
        </div>
      </div>
      <div>
      <Tabs className='my-5 '>
      <TabList className='flex justify-center'>
        <Tab className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-5'>CARS</Tab>
        <Tab className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-5'>BUSES</Tab>
        <Tab className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mx-5'>ROBOTS</Tab>
      </TabList>
      <TabPanel className='flex justify-center my-3'>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={car1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Car 1</h2>
    <p>Price: 25000</p>
    <p>Rating: 4.2</p>
    <div className="card-actions">
    <button className="btn btn-primary">View Details</button>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={car2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Car 2</h2>
        <p>Price: 25000</p>
        <p>Rating: 4.2</p>
    <div className="card-actions">
    <button className="btn btn-primary">View Details</button>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
      </TabPanel>
      <TabPanel className='flex justify-center my-3'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={bus1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Bus 1</h2>
    <p>Price: 25000</p>
    <p>Rating: 4.2</p>
    <div className="card-actions">
    <button className="btn btn-primary">View Details</button>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={bus2} alt="Shoes" className="rounded-xl w-52" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Bus 2</h2>
        <p>Price: 25000</p>
        <p>Rating: 4.2</p>
    <div className="card-actions">
    <button className="btn btn-primary">View Details</button>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
      </TabPanel>
      <TabPanel className='flex justify-center my-3'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={robot1} alt="Shoes" className="rounded-xl " />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Robot 1</h2>
    <p>Price: 25000</p>
    <p>Rating: 4.2</p>
    <div className="card-actions">
    <button className="btn btn-primary">View Details</button>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={robot2} alt="Shoes" className="rounded-xl w-44" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Robot 2</h2>
        <p>Price: 25000</p>
        <p>Rating: 4.2</p>
    <div className="card-actions">
    <button className="btn btn-primary">View Details</button>
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
      </TabPanel>
    </Tabs>
    </div>
    </div>
  );
};

export default ShopByCategory;


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ShopByCategory.css'

const ShopByCategory = () => {
  const handleViewDetails = (toy) => {
    if (!isLoggedIn()) {
      alert('You have to log in first to view details');
      // Redirect the user to the login page
      // Implement the redirection logic according to your project setup
    } else {
      // Implement logic for viewing toy details
      console.log('View toy details:', toy);
    }
  };

  const isLoggedIn = () => {
    // Implement your own logic to check if the user is logged in
    // You can use a state, context, or any authentication mechanism
    // Return true if the user is logged in, false otherwise
    return false;
  };

  return (
    <div>
      <h2>Shop by Category</h2>
      <Tabs>
        <TabList>
          <Tab>Math Toys</Tab>
          <Tab>Language Toys</Tab>
          <Tab>Engineering Toys</Tab>
        </TabList>

        <TabPanel>
          <h3>Math Toys</h3>
          <div className="toy-list">
            {/* Render toys in Math Toys category */}
            <div className="toy">
              <img src="../../../assets/Images/car1.jpg" alt="Toy 1" />
              <h4>Toy 1</h4>
              <p>Price: $10</p>
              <p>Rating: 4.5</p>
              <button onClick={() => handleViewDetails('Toy 1')}>View Details</button>
            </div>
            {/* Add more toys */}
          </div>
        </TabPanel>

        <TabPanel>
          <h3>Language Toys</h3>
          <div className="toy-list">
            {/* Render toys in Language Toys category */}
            <div className="toy">
              <img src="../../../assets/Images/bus1.jpg" alt="Toy 2" />
              <h4>Toy 2</h4>
              <p>Price: $15</p>
              <p>Rating: 4.2</p>
              <button onClick={() => handleViewDetails('Toy 2')}>View Details</button>
            </div>
            {/* Add more toys */}
          </div>
        </TabPanel>

        <TabPanel>
          <h3>Engineering Toys</h3>
          <div className="toy-list">
            {/* Render toys in Engineering Toys category */}
            <div className="toy">
              <img src="../../../assets/Images/robot1.jpeg" alt="Toy 3" />
              <h4>Toy 3</h4>
              <p>Price: $20</p>
              <p>Rating: 4.8</p>
              <button onClick={() => handleViewDetails('Toy 3')}>View Details</button>
            </div>
            {/* Add more toys */}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;

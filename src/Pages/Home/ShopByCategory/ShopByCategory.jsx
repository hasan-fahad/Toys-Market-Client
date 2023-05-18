
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ShopByCategory.css'
import { useState } from 'react';

const ShopByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <h2>Shop by Category</h2>
      <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>CARS</Tab>
        <Tab>BUSES</Tab>
        <Tab>ROBOTS</Tab>
      </TabList>
      <TabPanel>
        
      </TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
    </div>
    </div>
  );
};

export default ShopByCategory;

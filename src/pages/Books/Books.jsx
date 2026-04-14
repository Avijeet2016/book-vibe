import React from 'react';
import { BookMainContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from '../Book/Book';
import ReadList from '../ListedBooks/ReadList';
import WishList from '../ListedBooks/WishList';

const Books = () => {
    
    return (
      <div className="container mx-auto my-5">
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>
          <TabPanel>
            <ReadList></ReadList>
          </TabPanel>
          <TabPanel>
            <WishList></WishList>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default Books;
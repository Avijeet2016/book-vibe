import React, { useState } from 'react';
import { BookMainContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Book from '../Book/Book';
import ReadList from '../ListedBooks/ReadList';
import WishList from '../ListedBooks/WishList';

const Books = () => {

    const [sortedType, setSortedType] = useState("");


    return (
      <div>
        <div className="flex justify-center items-center">
          <div className="dropdown dropdown-center  ">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By: {sortedType}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => setSortedType("pages")}>
                <a>Pages</a>
              </li>
              <li onClick={() => setSortedType("rating")}>
                <a>Rating</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto my-5">
          <Tabs>
            <TabList>
              <Tab>Read List</Tab>
              <Tab>Wish List</Tab>
            </TabList>
            <TabPanel>
              <ReadList sortedType={sortedType}></ReadList>
            </TabPanel>
            <TabPanel>
              <WishList sortedType={sortedType}></WishList>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
};

export default Books;
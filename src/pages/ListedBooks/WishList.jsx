import React, { useContext, useEffect, useState } from 'react';
import { BookMainContext } from '../../Context/BookContext';
import Book from '../Book/Book';

const WishList = ({sortedType}) => {
    const {wishList} = useContext(BookMainContext);
    const [filteredWishList, setFilteredWishList] = useState(wishList);

    useEffect(() => {
      if (sortedType) {
        if (sortedType === "pages") {
          const sortedData = [...wishList].sort(
            (a, b) => a.totalPages - b.totalPages,
          );
          setFilteredWishList(sortedData);
        } else if (sortedType === "rating") {
          const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
          setFilteredWishList(sortedData);
        }
      }
    }, [sortedType, wishList]);

    if (filteredWishList.length === 0) {
      return (
        <div className="container mx-auto my-5 rounded-2xl h-[50vh] bg-gray-400 flex justify-center items-center">
          <h2 className="font-bold text-2xl">No data found in wish list</h2>
        </div>
      );
    }
        
    return (
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredWishList.map((book, index) => (
            <Book key={index} book={book}></Book>
          ))}
        </div>
      </div>
    );
};

export default WishList;
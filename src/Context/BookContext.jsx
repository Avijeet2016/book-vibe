import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookMainContext = createContext();

const BookContext = ({children}) => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {
      const isExisted = readList.find(
        (book) => book.bookId == currentBook.bookId,
      );
      if (isExisted) {
        toast.error("This book is already existed");
      } else {
        setReadList([...readList, currentBook]);
        toast.success(`${currentBook.bookName} is stored to list`);
      }
    };

    const handleWishList = (currentBook) => {
      const isExisted = wishList.find(book => book.bookId == currentBook.bookId);

      const isExistInReadList = readList.find(book => book.bookId == currentBook.bookId);

      if (isExistInReadList) {
        toast.error('This book is already in read list');
        return;
      }

      if (isExisted) {
        toast.error('This book is already in wish list');
      }
      else {
        setWishList([...wishList, currentBook]);
        toast.success(`${currentBook.bookName} is added to wish list`);
      }
    }

    const data = {
        readList, setReadList, handleMarkAsRead, wishList, setWishList, handleWishList
    };

    return (
        <BookMainContext.Provider value={data}>
            {children}
        </BookMainContext.Provider>
    );
};

export default BookContext;
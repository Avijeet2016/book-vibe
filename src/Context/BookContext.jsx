import React, { createContext, useState } from 'react';

export const BookMainContext = createContext();

const BookContext = ({children}) => {
    const [storedBooks, setStoredBooks] = useState([]);

    const handleMarkAsRead = (currentBook) => {
      const isExisted = storedBooks.find(
        (book) => book.bookId == currentBook.bookId,
      );
      if (isExisted) {
        alert("This book is already existed");
      } else {
        setStoredBooks([...storedBooks, currentBook]);
        alert(`${currentBook.bookName} is stored to list`);
      }
    };

    const data = {
        storedBooks, setStoredBooks, handleMarkAsRead
    };

    return (
        <BookMainContext.Provider value={data}>
            {children}
        </BookMainContext.Provider>
    );
};

export default BookContext;
import React, { useContext } from 'react';
import { BookMainContext } from '../../Context/BookContext';
import Book from '../Book/Book';

const ReadList = () => {
    const {readList} = useContext(BookMainContext);

    if (readList.length === 0) {
      return (
        <div className="container mx-auto my-5 rounded-2xl h-[50vh] bg-gray-400 flex justify-center items-center">
          <h2 className="font-bold text-2xl">No data found in read list</h2>
        </div>
      );
    }

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                          {readList.map((book, index) => (
                            <Book key={index} book={book}></Book>
                          ))}
                        </div>
        </div>
    );
};

export default ReadList;
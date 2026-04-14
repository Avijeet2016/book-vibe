import React, { useContext, useEffect, useState } from 'react';
import { BookMainContext } from '../../Context/BookContext';
import Book from '../Book/Book';

const ReadList = ({ sortedType }) => {
  const { readList } = useContext(BookMainContext);
  const [filteredReadList, setFilteredReadList] = useState(readList);

  useEffect(()=>{
    if (sortedType) {
      if (sortedType === "pages") {
        const sortedData = [...readList].sort((a, b) => a.totalPages - b.totalPages);
        setFilteredReadList(sortedData);
      }
      else if (sortedType === "rating") {
        const sortedData = [...readList].sort(
          (a, b) => a.rating - b.rating,
        );
        setFilteredReadList(sortedData);
      }
    }
  }, [sortedType, readList])


  if (filteredReadList.length === 0) {
    return (
      <div className="container mx-auto my-5 rounded-2xl h-[50vh] bg-gray-400 flex justify-center items-center">
        <h2 className="font-bold text-2xl">No data found in read list</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredReadList.map((book, index) => (
          <Book key={index} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default ReadList;
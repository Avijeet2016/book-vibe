import React, { use } from 'react';
import Book from '../Book/Book';


const bookPromise = fetch('/booksData.json').then(res => res.json());

const AllBooks = () => {
    const books = use(bookPromise);

    return (
      <div className='container mx-auto'>
        <h2 className="font-bold text-4xl text-center mt-25 mb-9">Books</h2>
        <div className="grid grid-cols-3 gap-10">
          {books.map((book, index) => (
            <Book key={index} book={book}></Book>
          ))}
        </div>
      </div>
    );
};

export default AllBooks;
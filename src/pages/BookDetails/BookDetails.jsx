import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookMainContext } from '../../Context/BookContext';

const BookDetails = () => {
  const { id } = useParams();

  const books = useLoaderData();
    
  const expectedBook = books.find((book) => book.bookId == id);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating
    } = expectedBook;

    const { handleMarkAsRead } = useContext(BookMainContext);

  return (
    <div>
      <div className="card lg:card-side bg-base-100  container mx-auto grid grid-cols-2 items-start mt-10">
          <figure className='flex justify-center items-center p-20 bg-gray-100 rounded-2xl w-full'>
            <img src={image} alt={bookName} className='h-100 object-contain'/>
          </figure>

        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{bookName}</h2>
          <p>By: {author}</p>
          <hr className="text-gray-300" />
          <p>{category}</p>
          <hr className="text-gray-300" />
          <p>
            <span className="font-bold">Review:</span> {review}
          </p>
          <div className="flex gap-1 items-center">
            <h2 className="text-xl font-bold">Tag</h2>
            {tags.map((tag, index) => (
              <div key={index} className="text-green-500 bg-green-50 badge">
                #{tag}
              </div>
            ))}
          </div>
          <hr className="text-gray-300" />
          <div className="">
            <div className="grid grid-cols-4 gap-5">
              <span>Number of Pages:</span>
              <span className="font-bold">{totalPages}</span>
            </div>
            <div className="grid grid-cols-4 gap-5">
              <span>Publisher:</span>
              <span className="font-bold">{publisher}</span>
            </div>
            <div className="grid grid-cols-4 gap-5">
              <span>Year of Publishing:</span>
              <span className="font-bold">{yearOfPublishing}</span>
            </div>
            <div className="grid grid-cols-4 gap-5">
              <span>Rating:</span>
              <span className="font-bold">{rating}</span>
            </div>
          </div>
          <div className="card-actions justify-start mt-5">
            <button className="btn btn-none" onClick={()=>handleMarkAsRead(expectedBook)}>Mark as Read</button>
            <button className="btn btn-accent text-white">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
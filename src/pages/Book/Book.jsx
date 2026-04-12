import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';


const Book = ({book}) => {
    const {bookId, bookName, image, author, category, tags, rating} = book;
    return (

        <Link to={`/bookDetails/${bookId}`} className="card bg-base-100  shadow-sm p-5">
          <figure className='bg-gray-200 rounded-2xl'>
            <img src={image} alt={bookName} className='h-50 py-5' />
          </figure>
          <div className="card-body">
            <div className='flex justify-start gap-1'>
              {tags.map((tag, index) => (
                <div key={index} className="text-gray-500 bg-green-100 badge">
                  {tag}
                </div>
              ))}
            </div>
            <h2 className="card-title text-2xl">{bookName}</h2>
            <p>By: {author}</p>
            <hr className="border border-dashed border-gray-300" />
            <div className="card-actions justify-between">
              <div className="">{category}</div>
              <div className="flex  gap-1 items-center">
                <div>{rating}</div>
                <FaRegStar />
              </div>
            </div>
          </div>
        </Link>

    );
};

export default Book;
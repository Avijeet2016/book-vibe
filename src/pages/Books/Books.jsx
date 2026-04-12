import React, { useContext } from 'react';
import { BookMainContext } from '../../Context/BookContext';

const Books = () => {
    const { storedBooks } = useContext(BookMainContext);
    console.log(storedBooks);

    return <div>

    </div>;
};

export default Books;
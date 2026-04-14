import React, { useContext } from 'react';
import ReadList from '../ListedBooks/ReadList';
import BookContext, { BookMainContext } from '../../Context/BookContext';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const PagesToRead = () => {
    const {readList} = useContext(BookMainContext);

    const getPath = (x, y, width, height) => 
      `M${x},${y + height}
      C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;

    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;

      if (x == null || y == null || width == null || height == null) {
        return null;
      }

      return <path d={getPath(Number(x), Number(y), Number(width), Number(height))} stroke="none" fill={fill} />;
    }

    return (
      <div className='container mx-auto flex items-center justify-center my-20'>

        <BarChart height={300} width={1000} data={readList} >
          <XAxis dataKey="bookName"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Bar dataKey="totalPages" fill="blue" shape={TriangleBar}></Bar>
        </BarChart>
      </div>
    );
};

export default PagesToRead;



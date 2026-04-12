import React from 'react';
import bookImg from '../../../../assets/hero_img.jpg';

const Hero = () => {
    return (
      <div>
        <div className="hero bg-base-200 min-h-[70h] my-5 py-15 rounded-2xl container mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between ">
            <img src={bookImg} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold mb-8">
                Books to freshen up
                <br /> your bookshelf
              </h1>

              <button className="btn btn-success">View the List</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;
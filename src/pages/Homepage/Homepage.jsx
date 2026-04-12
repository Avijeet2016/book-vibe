import React from 'react';
import Hero from '../../components/shared/navbar/Hero/Hero';
import AllBooks from './AllBooks';

const Homepage = () => {
    return (
        <div>
            <Hero></Hero>
            <AllBooks></AllBooks>
        </div>
    );
};

export default Homepage;
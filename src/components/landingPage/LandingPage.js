import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import ProductType from '../productType/ProductType';
import AboutUs from '../aboutUs/AboutUs';
import Products from '../products/Products';
import Footer from '../footer/Footer';

const LandingPage = () => {
    const [count, setCount] = useState(0);

    const handleBadge = () => {
        setCount(prevCount => prevCount + 1);
        console.log(count + 1); // Log the updated count value
    };
    return (
        <div>
            <div style={{position:"sticky",top:"1px",zIndex:60}}>
            <Navbar count={count} handleBadge={handleBadge} />
            </div>
           
            <Home></Home>
            <ProductType></ProductType>
            <AboutUs></AboutUs>
            <Products handleBadge={handleBadge} />
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;
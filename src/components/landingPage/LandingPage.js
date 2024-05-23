import React from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import ProductType from '../productType/ProductType';

const LandingPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <ProductType></ProductType>
        </div>
    );
};

export default LandingPage;
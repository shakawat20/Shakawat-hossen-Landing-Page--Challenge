import React from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import ProductType from '../productType/ProductType';
import AboutUs from '../aboutUs/AboutUs';
import Products from '../products/Products';
import Footer from '../footer/Footer';

const LandingPage = () => {
    return (
        <div>
            <div style={{position:"sticky",top:"1px",zIndex:60}}>
                 <Navbar></Navbar>
            </div>
           
            <Home></Home>
            <ProductType></ProductType>
            <AboutUs></AboutUs>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;
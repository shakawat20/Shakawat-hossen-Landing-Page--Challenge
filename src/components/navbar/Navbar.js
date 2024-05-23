import React from 'react';
import logo from '../../images/Logo.png'

import profileLogo from '../../images/Profile icon.png'
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {


    const nav = <>
        <li>
            <Link to="home" spy={true} smooth={true} duration={500}>Home</Link>
        </li>
        <li>
            <Link to="about" spy={true} smooth={true} duration={500}>About Us</Link>
        </li>
        <li>
            <Link to="products" spy={true} smooth={true} duration={500}>Products</Link>
        </li>
        <li>
            <Link to="features" spy={true} smooth={true} duration={500}>Features</Link>
        </li>
        <li>
            <Link to="reviews" spy={true} smooth={true} duration={500}>Reviews</Link>
        </li>
        <li>
            <Link to="contact" spy={true} smooth={true} duration={500}>Contact Us</Link>
        </li>
    </>;


    return (
        <div>
            <div className="navbar bg-[#FFFFFF]-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                nav
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">

                        <img src={
                            logo
                        } alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            nav
                        }
                    </ul>
                </div>

                <div className="navbar-end">

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                    <img src={profileLogo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
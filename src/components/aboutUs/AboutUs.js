import React from 'react';
import about from '../../images/SunglassForAboutUs.png'

const AboutUs = () => {
    return (
        <div id="about" className="flex flex-col lg:flex-row md:flex-col h-auto">
        <div className="flex flex-col items-center justify-center w-full lg:w-7/12 bg-[#FED29C] p-6 lg:p-12">
            <h1 className="font-jost text-3xl lg:text-4xl font-bold leading-tight text-left mb-4">
                Experience clear vision with <br /> OptiChroma Vision Frames
            </h1>
            <p className="font-jost text-lg lg:text-xl font-normal leading-relaxed text-left mb-4">
                At OptiChroma, we believe that everyone deserves clear vision and stylish eyewear. That's why we've designed a collection of frames that prioritize both form and function.
            </p>
            <p className="font-jost text-lg lg:text-xl font-normal leading-relaxed text-left mb-4">
                Our team of experts is dedicated to helping you find the perfect pair of glasses.
            </p>
            <button className="bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 mt-4">
                About Us
            </button>
        </div>
        <div className="w-full lg:w-5/12" >
            <img className="w-[100%] h-auto rounded-lg" src={about} alt="OptiChroma Vision Frames" />
        </div>
    </div>
    
    );
};

export default AboutUs;
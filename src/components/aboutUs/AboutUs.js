import React from 'react';
import about from '../../images/SunglassForAboutUs.png'

const AboutUs = () => {
    return (
        <div id='about' style={{ display: "flex", backgroundColor: "#FED29C"}}>
            <div style={{ width: "55%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h1 style={{
                    fontFamily: 'Jost',
                    fontSize: '38px',
                    fontWeight: 700,
                    lineHeight: '48px',
                    textAlign: 'left'
                }}>Experience clear vision with <br /> OptiChroma Vision Frames</h1>
                <p style={{
                    fontFamily: 'Jost',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '30px',
                    textAlign: 'left'
                }}>At OptiChroma, we believe that everyone deserves clear vision and stylish eyewear. That's why we've designed a collection of frames that prioritize both form and function.</p>
                <p style={{
                    fontFamily: 'Jost',
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: '30px',
                    textAlign: 'left'
                }}>Our team of experts is dedicated to helping you find the perfect pair of glasses.</p>
                <button class="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-1" style={{ width: "120px",marginTop:"30px" }}>

                    <span class="ml-2">About US</span>
                </button>

            </div>
            <div style={{ width: "45%" }}>
                <img src={about} alt="" />
            </div>
        </div>
    );
};

export default AboutUs;
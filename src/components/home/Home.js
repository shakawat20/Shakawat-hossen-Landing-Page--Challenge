import React from 'react';
import home from '../../images/Image.png'
import shopIcon from '../../images/Vector.png'
import searchIcon from '../../images/magnifierIcon.png'
import sunglassIcon from '../../images/sunglassIcon.png'
import cardIcon from '../../images/card.png'
import deliveryIcon from '../../images/vehicle.png'
// import '../../App.css'

const Home = () => {
    const object1 = [{
        img: searchIcon,
        h1: 'Search sunglass',
        h2: 'Shop stylish Eyewear Now',
    },
    {
        img: sunglassIcon,
        h1: 'Select Sunglass',
        h2: 'Shade Your Style'
    },
    {
        img: cardIcon,
        h1: 'Make Payment',
        h2: 'Securely Checkout Now'
    },
    {
        img: deliveryIcon,
        h1: 'Received Product',
        h2: 'See the Would Clearly'
    }

    ]

    return (

        <div>

            <div class='hope' style={{ width: "100%", height: "", backgroundColor: "#EAEAEA", display: "flex", justifyContent: "center" }}>
                <div style={{ position: "absolute", left: "14%", top: "30%", zIndex: 10 }}>
                    <h1 style={{
                        fontFamily: 'Jost, sans-serif',
                        fontSize: '54px',
                        fontWeight: 700,
                        lineHeight: '66px',
                        textAlign: 'left'
                    }}>Personalized Eyeglass <br />Shopping</h1>
                    <button class="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-7">
                        <img src={shopIcon} alt="" />
                        <span class="ml-2">Buy Now</span>
                    </button>
                </div>
                <div style={{ width: "500px", height: '500px', backgroundColor: "#FED29C", borderRadius: "50%", position: "relative", left: "15%" }}>
                    <img src={home} alt="Home Image" style={{height:"100%"}} className="w-100  object-cover rounded-lg hover:shadow-xl transition-shadow duration-300" />
                </div>


            </div>
            <div  style={{ width: "100%" }}>
                <div id='features' style={{ position: "relative", top: "-90px", display: "flex", justifyContent: "space-between", width: "100%" }}>
                    {
                        object1.map(object =>
                            <div className='flex flex-col justify-center items-center' style={{ width: "170px", height: "236px" }}>
                                <div style={{ width: "90px", height: '90px', position: "relative", backgroundColor: "#FED29C", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img src={object.img} alt="Home Image" className="w-50 h-50 object-cover rounded-lg hover:shadow-xl transition-shadow duration-300" />

                                </div>
                                <h1 style={{

                                    width: "100%",
                                    fontFamily: 'Jost',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    lineHeight: '30px',
                                    textAlign: 'center'

                                    // color: '#383838'
                                }}>{object.h1}</h1>
                                <h1 style={{
                                    fontFamily: 'Jost',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    lineHeight: '26px',
                                    textAlign: 'center'
                                }}>{object.h2}</h1>
                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;
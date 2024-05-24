import React from 'react';
import bravoSunglass from '../../images/upperLeft.png';
import tommyHilfiger from '../../images/upperRight.png';
import johnJacob from '../../images/bottomLeft.png';
import vincentChase from '../../images/bottomRight.png';

const cardStyle = (backgroundImage, customHeight, customWidth, customTop = 0) => ({
    backgroundImage: `url(${backgroundImage})`,
    height: customHeight,
    width: customWidth,
    padding: '10px',
    border: '1px solid black',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    position: customTop ? "relative" : "static",
    top: customTop ? customTop : "0",
});

const innerCardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "5px",
    marginBottom: "20px",
    justifyContent: "center",
    width: "78%",
    height: "35%"
};

const innerCardTextStyle = {
    width: "100%",
    fontFamily: 'Jost',
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '30px',
    textAlign: 'center',
    display: "flex",
    justifyContent: "center",
};

const innerCardTextStyleBottom = {
    fontFamily: "Jost",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "30px",
    textAlign: "center"
};

const GridComponent = () => {
    const fourthCardTop = '-120px'; // Adjust this value as needed
    return (
        <div className='flex justify-center'>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 p-4' style={{ width: "90%" }} id='reviews'>
                <div style={cardStyle(bravoSunglass, '633px', '100%')}>
                    <div style={innerCardStyle}>
                        <h1 style={innerCardTextStyle}>Bravo Sunglass</h1>
                        <h1 style={innerCardTextStyleBottom}>Up to 80% of on selected Item</h1>
                        <button className="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-1" style={{ width: "110px" }}>
                            <span className="ml-2">Buy Now</span>
                        </button>
                    </div>
                </div>
                <div style={cardStyle(tommyHilfiger, '508px', '100%')}>
                    <div style={innerCardStyle}>
                        <h1 style={innerCardTextStyle}>Tommy Hilfiger</h1>
                        <h1 style={innerCardTextStyleBottom}>Up to 70% off on selected Items</h1>
                        <button className="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-1" style={{ width: "110px" }}>
                            <span className="ml-2">Buy Now</span>
                        </button>
                    </div>
                </div>
                <div style={cardStyle(johnJacob, '509px', '100%')}>
                    <div style={innerCardStyle}>
                        <h1 style={innerCardTextStyle}>John Jacob</h1>
                        <h1 style={innerCardTextStyleBottom}>Up to 60% off on selected Items</h1>
                        <button className="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-1" style={{ width: "110px" }}>
                            <span className="ml-2">Buy Now</span>
                        </button>
                    </div>
                </div>
                <div style={cardStyle(vincentChase, '633px', '100%', fourthCardTop)}>
                    <div style={innerCardStyle}>
                        <h1 style={innerCardTextStyle}>Vincent Chase</h1>
                        <h1 style={innerCardTextStyleBottom}>Up to 50% off on selected Items</h1>
                        <button className="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-1" style={{ width: "110px" }}>
                            <span className="ml-2">Buy Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridComponent;

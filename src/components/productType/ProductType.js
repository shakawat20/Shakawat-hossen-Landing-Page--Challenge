

import React from 'react';
import bravoSunglass from '../../images/upperLeft.png';
import tommyHilfiger from '../../images/upperRight.png';
import johnJacob from '../../images/bottomLeft.png';
import vincentChase from '../../images/bottomRight.png';
// import '../../App.css'

const book1 = {
    backgroundImage: `url(${bravoSunglass})`,
    height: '633px',
    width: '100%',
    padding: '10px',
    border: '1px solid black',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: "flex",
    justifyContent: "center",
    alignItems: "end"
};

const book2 = {
    backgroundImage: `url(${tommyHilfiger})`,
    height: '508px',
    width: '643px',
    padding: '10px',
    border: '1px solid black',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: "flex",
    justifyContent: "center",
    alignItems: "end"
};

const book3 = {
    backgroundImage: `url(${johnJacob})`,
    height: '509px',
    width: "100%",
    padding: '10px',
    border: '1px solid black',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: "flex",
    justifyContent: "center",
    alignItems: "end"
};

const book4 = {
    backgroundImage: `url(${vincentChase})`,
    position: "relative",
    top: "-120px",
    height: '633px',
    width: '643px',
    padding: '10px',
    border: '1px solid black',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: "flex",
    justifyContent: "center",
    alignItems: "end"
};

const innerCard = {
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

}
const innerCardTextStyleBottom = {
    fontFamily: "Jost",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "30px",
    textAlign: "center"
};
const GridComponent = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1  justify-center gap-2 ' id='reviews' style={{width:"90%"}}  >
            <div style={book1}>
                
                <div style={innerCard}>

                    <h1 style={innerCardTextStyle}>Bravo Sunglass</h1>
                    <h1 style={innerCardTextStyleBottom}>Up to 80% of on selected Item</h1>
                    <button class="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-1" style={{ width: "110px" }}>

                        <span class="ml-2">Buy Now</span>
                    </button>
                </div>

            </div>
            <div style={book2}>
                <div style={innerCard}>

                    <h1 style={innerCardTextStyle}>Bravo Sunglasss</h1>
                    <h1 style={innerCardTextStyleBottom}>Up to 80% of on selected Item</h1>
                    <button class="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-1" style={{ width: "110px" }}>

                        <span class="ml-2">Buy Now</span>
                    </button>
                </div>

            </div>
            <div style={book3}>
                <div style={innerCard}>

                    <h1 style={innerCardTextStyle}>Bravo Sunglassp</h1>
                    <h1 style={innerCardTextStyleBottom}>Up to 80% of on selected Item</h1>
                    <button class="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-1" style={{ width: "110px" }}>

                        <span class="ml-2">Buy Now</span>
                    </button>
                </div>

            </div>
            <div style={book4}>
                <div style={innerCard}>

                    <h1 style={innerCardTextStyle}>Bravo Sunglass</h1>
                    <h1 style={innerCardTextStyleBottom}>Up to 80% of on selected Item</h1>
                    <button class="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-1" style={{ width: "110px" }}>

                        <span class="ml-2">Buy Now</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default GridComponent;




// import React from 'react';
// import bravoSunglass from '../../images/upperLeft.png';
// import tommyHilfiger from '../../images/upperRight.png';
// import johnJacob from '../../images/bottomLeft.png';
// import vincentChase from '../../images/bottomRight.png';
// import '../../App.css'

// const ProductType = () => {
//     const innerCardTextStyle = {
//         width: "100%",
//         fontFamily: 'Jost',
//         fontSize: '20px',
//         fontWeight: 700,
//         lineHeight: '30px',
//         textAlign: 'center',
//         display: "flex",
//         justifyContent: "center",

//     }
//     const innerCardTextStyleBottom = {
//         fontFamily: "Jost",
//         fontSize: "20px",
//         fontWeight: 400,
//         lineHeight: "30px",
//         textAlign: "center"
//     };

//     const innerCard = {
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         backgroundColor: "white",
//         borderRadius: "5px",
//         marginBottom: "20px",
//         justifyContent: "center",
//         width: "78%",
//         height: "35%"

//     };
//     return (
//         <div style={{ width: "100%" }} id="reviews" >
//             <div style={{ display: "flex", justifyContent: "center" ,width:"100%"}} >
//                 <div style={{
//                     backgroundImage: `url(${bravoSunglass})`,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "end",
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//
//                     borderRadius: "5px"
//                 }}
//                  >
//                     <div style={innerCard}>

//                         <h1 style={innerCardTextStyle}>Bravo Sunglass</h1>
//                         <h1 style={innerCardTextStyleBottom}>Up to 80% of on selected Item</h1>
//                         <button class="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-1" style={{ width: "110px" }}>

//                             <span class="ml-2">Buy Now</span>
//                         </button>
//                     </div>



//                 </div>



//                 <div style={{
//                     backgroundImage: `url(${tommyHilfiger})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     width: '30%',
//                     height: '350px', // adjust as necessary

//                     margin: '10px', // add margin to separate divs if needed
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "end",

//                     borderRadius: "5px"

//                 }}>
//                     <div style={innerCard}>
//                         <h1 style={innerCardTextStyle}>Bravo Sunglass</h1>
//                         <h1 style={innerCardTextStyleBottom}>Up to 80% of on selected Item</h1>
//                         <button class="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-1" style={{ width: "110px" }}>

//                             <span class="ml-2">Buy Now</span>
//                         </button>
//                     </div>


//                 </div>
//             </div>
//             <div style={{ display: "flex", justifyContent: "center" }} class='responsive'>
//                 <div style={{
//                     backgroundImage: `url(${johnJacob})`,
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "end",
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     width: '30%',
//                     height: '299px', // adjust as necessary

//                     margin: '10px',
//                     borderRadius: "5px"

//                 }
//                 }>
//                     <div style={innerCard}>
//                         <h1 style={innerCardTextStyle}>Bravo Sunglassss</h1>
//                         <h1 style={innerCardTextStyleBottom}>Up to 80% of on selected Item</h1>
//                         <button class="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mb-3" style={{ width: "110px" }}>

//                             <span class="ml-2">Buy Now</span>
//                         </button>
//                     </div>


//                 </div>
//                 <div style={{
//                     backgroundImage: `url(${vincentChase})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     position: "relative",
//                     top: "-105px",
//                     width: '30%',
//                     height: '400px', // adjust as necessary

//                     margin: '10px', // add margin to separate divs if needed
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "end",
//                     borderRadius: "5px"
//                 }
//                 }>

//                     <div style={innerCard}>

//                         <h1 style={innerCardTextStyle} className='hope'>Bravo Sunglassaa</h1>
//                         <h1 style={innerCardTextStyleBottom}>Up to 80% of on selected Item</h1>
//                         <button class="flex items-center bg-[#383838] text-white font-bold py-2 px-4 rounded hover:bg-[#383838] mt-1" style={{ width: "110px" }}>

//                             <span class="ml-2">Buy Now</span>
//                         </button>
//                     </div>


//                 </div>
//             </div>
//         </div >
//     );
// };

// export default ProductType;












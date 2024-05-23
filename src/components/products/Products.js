import React from 'react';
import img1 from '../../images/sunglass1.png'
import img2 from '../../images/sunglass2.png'
import img3 from '../../images/sunglass2.png'
import img4 from '../../images/sunglass4.png';
import img5 from '../../images/sunglass5.png';
import img6 from '../../images/sunglass6.png';

const Products = ({ handleBadge }) => {
    const productsInfo = [
        {
            id: 1,
            title: "Bravo Sunglass",
            img: img1,
            price: 89.99
        },
        {
            id: 2,
            title: "Vincent Chase",
            img: img2,
            price: 129.99
        },
        {
            id: 3,
            title: "John Jacobs",
            img: img3,
            price: 99.99
        },
        {
            id: 4,
            title: "Tommy Hilfiger",
            img: img4,
            price: 149.99
        },
        {
            id: 5,
            title: "Ray Ban",
            img: img5,
            price: 199.99
        },
        {
            id: 6,
            title: "Occhiali",
            img: img6,
            price: 79.99
        }
    ];

    return (
        <div id='products'>
            <h1 style={{
                styleName: "Heading",
                fontWeight: 700,
                fontSize: "38px",
                lineHeight: "48px",
                textAlign: "left",
                fontFamily: "Jost",
                color: "#383838"
            }}>
                Our Products
            </h1>
            <p style={{


                fontFamily: "Jost",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "26px",
                textAlign: "left",

                color: "#545454"
            }}>
                Experience crystal clear vision and elevated style <br />with our premium collection of eyeglasses.
            </p>
            <div className='grid grid-cols-3 justify-center items-center'>
                {
                    productsInfo.map(product => <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img style={{ width: "100%", backgroundColor: "#F7F7F7" }} src={product.img} alt="Shoes" /></figure>
                        <div style={{ display: "flex", flexDirection: "column", justifyItems: "flex-start", alignItems: "baseline", paddingLeft: "4px" }}>
                            <h2 style={{
                                styleName: "Heading",
                                fontFamily: "Jost",
                                fontSize: "30px",
                                fontWeight: 400,
                                lineHeight: "40px",
                                textAlign: "left",
                                color: "#383838"
                            }}>{product.title}</h2>
                            <p style={{
                                styleName: "Heading",
                                fontFamily: "Jost",
                                fontSize: "20px",
                                fontWeight: 700,
                                lineHeight: "30px",
                                textAlign: "left",
                                color: "#383838"
                            }}>$ {product.price}</p>
                            <button onClick={handleBadge} style={{
                                fontFamily: "Jost",
                                fontSize: "20px",
                                fontWeight: 400,
                                lineHeight: "28.9px",
                                textAlign: "left"
                            }}>
                                <span>Add To Cart</span>
                            </button>
                        </div>

                    </div>
                   )
                }
        </div>

        </div >
    );
};

export default Products;
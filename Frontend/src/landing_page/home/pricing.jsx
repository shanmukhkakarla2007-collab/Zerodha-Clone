import React from 'react';
function Pricing() {
    return ( 
         <div className="container mb-5 ">
            <div className="row">
                <div className="col-4 mt-5">
                    <h2>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
                <div className="col-2 mt-5"></div>
                <div className="col-6 mt-5">
                    <div className="row px-3">
                        <div className="col-6 p-3 border" style={{textAlign:"center"}}>
                            <h1>₹0</h1>
                            <p>Free equity delivery and <br />direct mutual funds</p>
                        </div>
                        <div className="col-6 p-3 border" style={{textAlign:"center"}}>
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     );
}

export default Pricing;
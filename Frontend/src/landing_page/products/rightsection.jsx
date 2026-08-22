
import React from 'react';
function Rightsection({
    imageURL,
    productName,
    productDescription,
    Learnmore,
}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6" style={{paddingTop:"14rem", paddingLeft:'3rem'}}>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a style={{textDecoration:"none"}}href={Learnmore}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-6 " style={{textAlign:"center"}}>
                    <img src={imageURL} alt="console logo" style={{width:"100%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Rightsection;
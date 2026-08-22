import React from 'react';
function Leftsection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imageURL} alt="kite logo" style={{ width: "100%" }} />
                </div>
                <div className="col-6 p-5">
                    <h1 className='mt-5'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div style={{ display: "flex", gap: "2rem" }}>
                        <a href={tryDemo} style={{ textDecoration: "none" }} >Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{ textDecoration: "none" }}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div style={{ display: "flex", gap: "2rem" }} className='mt-4'>
                        <a href={googlePlay} ><img src="assests\images\googlePlayBadge.svg" alt="play store" /></a>
                        <a href={appStore}><img src="assests\images\appstoreBadge.svg" alt="app store" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leftsection;
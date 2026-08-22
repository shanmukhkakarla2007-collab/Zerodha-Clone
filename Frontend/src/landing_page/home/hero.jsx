import React from 'react';
function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row" style={{textAlign:"center"}}>
                <img src="assests/images/homeHero.png" alt="hero image" className='mb-5' />
                <h1 className='mt-5'>invest in everything</h1>
                <p>Online platform to invest in stocks,derivatives,mutual funds and more</p>
                <button className='btn btn-primary fs-5 p-2 mb-5' style={{width:"15%",margin:"auto"}}>Signup now</button>
            </div>
        </div>
    );
}

export default Hero;
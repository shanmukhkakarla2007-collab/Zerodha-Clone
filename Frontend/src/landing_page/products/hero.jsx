import React from 'react';
function Hero() {
    return ( 
        <div className="container p-5 border-bottom">
            <div className="row p-5" style={{textAlign:"center"}}>
                <h1 style={{opacity:"0.7"}}>Technology</h1>
                <h5 className='mt-3' style={{opacity:"0.7"}}>Sleek, modern, and intuitive trading platforms</h5>
                <p className='mt-3'>Check out our <a href="" style={{textDecoration:"none"}}> investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;
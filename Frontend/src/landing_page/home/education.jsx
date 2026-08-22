
import React from 'react';

function Education() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="assests\images\education.svg" alt="education image " style={{width:"80%"}} />
                </div>
                <div className="col-6 p-5">
                     <h2 className="mb-3 mt-5">Free and open market education</h2>
                     <p className="mt-2">Varsity, the largest online stock market education book in the world <br />covering everything from the basics to advanced trading.</p>
                     <a href="" style={{textDecoration:"none"}}>Varsity<i class="fa-solid fa-arrow-right"></i></a>
                     <p className="mt-5" >TradingQ&A, the most active trading and investment community in <br />India for all your market related queries.</p>
                     <a href="" style={{textDecoration:"none"}}>TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;
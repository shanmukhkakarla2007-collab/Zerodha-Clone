import React from 'react';
function Universe() {
    return ( 
        <div className="container">
            <div className="row" style={{textAlign:"center"}}>
                <p className='fs-4'>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
                <h1 className='mt-4'>The Zerodha Universe</h1>
                <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row p-5">
                <div className="col-4 p-3" style={{textAlign:"center"}}><img src="assests\images\smallcaseLogo.png" alt="small logo" style={{width:"40%"}}/><p className='mt-4'>Thematic investment platform</p></div>
                <div className="col-4 p-3" style={{textAlign:"center"}}><img style={{width:"40%"}} src="assests\images\streakLogo.png" alt="strek logo" /><p className='mt-4'>Algo & strategy platform</p></div>
                <div className="col-4 p-3" style={{textAlign:"center"}}><img style={{width:"40%"}}src="assests\images\sensibullLogo.svg" alt="sensibull logo" /><p className='mt-4'>Options trading platform</p></div>
            </div>
            <div className="row ">
                <div className="col-4 p-3" style={{textAlign:"center"}}><img style={{width:"40%"}} src="assests\images\zerodhaFundhouse.png" alt="zerodha logo" /><p className='mt-4'>Asset managemen</p></div>
                <div className="col-4 p-3" style={{textAlign:"center"}}><img style={{width:"40%"}}src="assests\images\goldenpiLogo.png" alt="golden logo" /><p className='mt-4'>Fundamental research platform</p></div>
                <div className="col-4 p-3" style={{textAlign:"center"}}><img style={{width:"40%"}}src="assests\images\dittoLogo.png" alt="ditto logo" /><p className='mt-4'>Insurance</p></div>
            </div>
            <div className="row">
                <button className='btn btn-primary p-2 fs-5' style={{margin:"auto", width:"15%"}}>Sign up now</button>
            </div>
        </div>
     );
}

export default Universe;
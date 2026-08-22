import React from 'react';
function Team() {
    return (
        <div className="container">
            <div style={{textAlign:"center",opacity:"0.7"}} className='p-5'>
                <h1 className='p-5'>People</h1>
            </div>
            <div className="row p-5">
                <div className="col-6 p-5" style={{textAlign:"center"}}>
                    <img src="assests\images\nithinKamath.jpg" alt="founder image" style={{width:"50%", borderRadius:"50%"}}/>
                    <h4 className='mt-4' style={{opacity:"0.7"}} >Nithin Kamath</h4>
                    <h5 style={{opacity:"0.7"}}>Founder, CEO</h5>
                </div>
                <div className="col-6 p-5 fs-5" style={{opacity:"0.7"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a style={{textDecoration:"none"}}href="">TradingQnA</a> / <a style={{textDecoration:"none"}} href="">Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;
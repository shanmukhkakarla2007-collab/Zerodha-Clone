import React from 'react';
function Hero() {
    return ( 
        <div className="container">
            <div className="row p-5 border-bottom" style={{textAlign:"center"}}>
                <h1 className="pt-5">Pricing</h1>
                <h4 className="pt-3" style={{opacity:"0.7"}}>Free equity investments and flat ₹20 intraday and F&O trades</h4>
            </div>
            <div className="row p-5">
                <div className="col-4 p-5" style={{textAlign:"center"}}>
                    <img src="assests\images\pricingEquity.svg" alt="pricing equity" />
                    <h3>Free equity delivery</h3>
                    <p style={{opacity:"0.7"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 p-5" style={{textAlign:"center"}}>
                    <img src="assests\images\intradayTrades.svg" alt="trades logo" />
                    <h3>Intraday and F&O trades</h3>
                    <p style={{opacity:"0.7"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 p-5" style={{textAlign:"center"}}>
                    <img src="assests\images\pricingEquity.svg" alt="Pricing equity" />
                    <h3>Free equity delivery</h3>
                    <p style={{opacity:"0.7"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;

import React from 'react';

function Awards() {
    return (
        <div className="container mb-5">
            <div className="row ">
                <div className="col-6 p-5">
                    <img src="assests\images\largestBroker.svg" alt="Awards image" />
                </div>
                <div className="col-6 pt-5">
                    <h1>Largest stock brocker in india</h1>
                    <p>2+ milion zerodha clients contribute to over 15% of all retail volumes of india daily by trading and investing in:</p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li className='mb-3'>Futures and Options</li>
                                <li className='mb-3'>Commodity derivatives</li>
                                <li className='mb-3'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li className='mb-3'>Stocks & IPOs</li>
                                <li className='mb-3'>Direct mutual funds</li>
                                <li className='mb-3'>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src="assests\images\pressLogos.png" alt="press logo" style={{width:"85%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;


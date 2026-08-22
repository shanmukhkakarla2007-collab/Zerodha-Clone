import React from 'react';
import { Link } from 'react-router-dom';

function Funds() {
    return (
        <div className="funds">
            <div className="funds-change">
                <span>Instant, zero-cost fund transfers with UPI </span>
                <button className='btn' style={{ backgroundColor: "#4caf50" }}><Link >Add funds</Link></button>
                <button className='btn' style={{ backgroundColor: "#4184f3" }}><Link >Withdraw</Link></button>
            </div>
            <div className="row py-5">
                <div className="col-6 col-first">
                    <span>
                        <p><i class="fa-regular fa-clock"></i>&nbsp;Equity</p>
                    </span>
                    <div className="table border p-4">
                        <div className="data">
                            <p>Available margin</p>
                            <p className="imp colored">4,043.10</p>
                        </div>
                        <div className="data">
                            <p>Used margin</p>
                            <p className="imp">3,757.30</p>
                        </div>
                        <div className="data">
                            <p>Available cash</p>
                            <p className="imp">4,043.10</p>
                        </div>
                        <hr />
                        <div className="data">
                            <p>Opening Balance</p>
                            <p>4,043.10</p>
                        </div>
                        <div className="data">
                            <p>Opening Balance</p>
                            <p>3736.40</p>
                        </div>
                        <div className="data">
                            <p>Payin</p>
                            <p>4064.00</p>
                        </div>
                        <div className="data">
                            <p>SPAN</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Delivery margin</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Exposure</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Options premium</p>
                            <p>0.00</p>
                        </div>
                        <hr />
                        <div className="data">
                            <p>Collateral (Liquid funds)</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Collateral (Equity)</p>
                            <p>0.00</p>
                        </div>
                        <div className="data">
                            <p>Total Collateral</p>
                            <p>0.00</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-second">
                    <p>You don't have a commodity account</p>
                    <button className='btn'><Link>Open Account</Link></button>
                </div>
            </div>
        </div>
    );
}

export default Funds;
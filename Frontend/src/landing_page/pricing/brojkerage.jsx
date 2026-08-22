import React from 'react';
function Brojkerage() {
    return ( 
        <div className="container border-top">
            <div className="row p-5">
                <div className="col-6 p-5">
                    <h5 style={{textAlign:"center"}} className='mb-4'><a style={{textDecoration:"none"}}href="">Brokerage Calculator</a></h5>
                    <ul style={{fontSize:"0.8rem",opacity:"0.7"}}>
                        <li className='mb-2'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li className='mb-2'>Digital contract notes will be sent via e-mail.</li>
                        <li className='mb-2'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li className='mb-2'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li className='mb-2'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li className='mb-2'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-6 p-5">
                    <h5 style={{textAlign:"center"}} className='mb-4'><a style={{textDecoration:"none"}}href="">List Of charges</a></h5>
                    <ul style={{fontSize:"0.8rem",opacity:"0.7"}}>
                        <li className='mb-2'>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li className='mb-2'>Digital contract notes will be sent via e-mail.</li>
                        <li className='mb-2'>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li className='mb-2'>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li className='mb-2'>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li className='mb-2'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Brojkerage;


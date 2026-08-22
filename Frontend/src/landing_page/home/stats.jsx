import React from 'react';
function Stats() {
    return ( 
        <div className="container mb-5">
            <div className="row ">
                <div className="col-6  p-5 ">
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <h4>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>
                    <h4>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h4>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4>Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col-6 p-5 " style={{textAlign:"center"}}>
                    <img src="assests\images\ecosystem.png" alt="ecosystem image" style={{width:"80%"}} />
                    <div>
                        <a href="link1" style={{textDecoration:"none"}} className='m-5'> Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="link1"style={{textDecoration:"none"}}>Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;
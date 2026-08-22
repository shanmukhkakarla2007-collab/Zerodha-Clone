import React from 'react';
import Menu from './menu.jsx';
function Topbar({user,setuser}) {

    return ( 

        <div className="topbar-container">
            <div className="indices-container border">
                <div className="row" style={{width:"100%"}}>
                    <div className="col-6 my-4">
                        <span className='mx-4' style={{opacity:"0.7"}}><b>NIFTY 50</b></span>
                        <span style={{color:"#df4949"}}><b>100.2</b></span>
                    </div>
                    <div className="col-6 my-4">
                        <span className='mx-4' style={{opacity:"0.7"}}><b>SENSEX</b></span>
                        <span style={{color:"#df4949"}}><b>100.2</b></span>
                    </div>
                </div>
            </div>
            <Menu user={user} setuser={setuser}/>
        </div>
     );
}

export default Topbar;
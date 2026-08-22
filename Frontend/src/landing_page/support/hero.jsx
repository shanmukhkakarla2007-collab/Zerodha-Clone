import React from 'react';
function hero() {
    return ( 
        <section className='container-fluid p-5' id="support">
            <div id="portal" className='px-5 mx-5'>
                <h4>Support Portal</h4>
                <a href="" style={{color:"white"}}>Track Tickets</a>
            </div>
            <div className="row">
                <div className="col-6 p-5">
                    <h2>Search for an answer or browse help topics to create a ticket</h2>
                    <input className="my-3"type="text" placeholder='Eg.how do i activate F&O' /><br />
                    <a href="">Track account</a>  &nbsp;
                    <a href="">openingTrack</a>   &nbsp;
                    <a href="">segment</a>   &nbsp;
                    <a href="">activationIntraday</a>   &nbsp;
                    <a href="">marginsKite</a>   &nbsp;
                    <a href="">user manual</a>   &nbsp;
                </div>
                <div className="col-6 p-5">
                    <h2>Featured</h2>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default hero;
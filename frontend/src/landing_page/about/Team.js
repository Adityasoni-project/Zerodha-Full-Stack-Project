import React from 'react';

function Team() {
    return ( 
        <div className='container '>
            <div className='row '>
                <h1 className='fs-2  text-center' style={{color:"#424242"}}>People</h1>
            </div>
            <div className='row p-5  mx-5'>
                <div className='col-6 px-5 text-center'>
                    <img src='media/nithinKamath.jpg' style={{borderRadius:"100%",width:"300px"}}/>
                    <h5 className='mt-4' style={{color:"#424242"}}>Nithin Kamath</h5>
                    <h6 className='mt-3 'style={{color:"#9B9B9B"}}>Founder, CEO</h6>
                </div>    
                <div className='col-6 p-3 ' style={{fontSize:"17px",color:"#424242",lineHeight:"30px" }}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage</a> / <a href='' style={{textDecoration:"none"}}>TradingQnA</a> / <a href='' style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;
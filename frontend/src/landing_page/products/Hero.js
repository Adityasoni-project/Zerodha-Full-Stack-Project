import React from 'react';

function Hero() {
    return (
        <div className='container mb-5 border-bottom'>
            <div className='row p-5 mb-5'>
                <h1 className='fs-2  text-center' style={{color:"#424242",lineHeight:"42px",marginTop:"120px"}}>Zerodha Products</h1>
                <p style={{textAlign:"center",fontSize:"21px",color:"#424242"}}>Sleek, modern, and intuitive trading platforms</p>
                <p style={{textAlign:"center",fontSize:"18px",color:"#424242"}}>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings →</a></p>
            </div>
        </div>
      );
}

export default Hero;
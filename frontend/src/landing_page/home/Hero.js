import React from 'react';

function Hero() {
    return ( 
        <div className='container pt-5 mt-5'>
            <div className='row'>
                <div className='col text-center mt-4' >
                    <img src='media/homeHero.png' alt='Hero Image' width={723} />
                    <h2 style={{marginTop:"65px",color:"#424242"}}>Invest in everything</h2>
                    <p style={{fontSize:"20px",color:"#424242",marginTop:"18px"}}>Online platform to invest in stocks, IPOs, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button style={{width:"203px",marginTop:"20px",marginBottom:"25px",fontSize:"19px", height:"44px",padding:"10px,30px",backgroundColor:"#387ED1",color:"#FFFFFF",borderRadius:"5px",border:"0px"}}>Sign up for free</button>
                </div>
            </div>
        </div>
     );
}

export default Hero;
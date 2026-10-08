import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5  '>
            <div className='row p-5 mt-5 mx-5  text-center'>
                <h3 className='mt-3' style={{color:"#424242"}}>Charges</h3>
                <p className='text-muted fs-5 mt-1'>List of all charges and taxes</p>
            </div>
            <div className='row p-5  text-center'>
                <div className='col-4 text-muted' >
                    <img src="media/pricingEquity.svg" style={{width:"250px"}}/>
                    <h4>Free equity delivery</h4>
                    <p style={{fontSize:"15px",marginTop:"15px",lineHeight:"25px"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 text-muted' >
                    <img src="media/intradayTrades.svg" style={{width:"250px"}}/>
                    <h4>Intraday and F&O trades</h4>
                    <p style={{fontSize:"15px",marginTop:"15px",lineHeight:"25px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 text-muted' >
                    <img src="media/pricingMF.svg" style={{width:"250px"}}/>
                    <h4>Free direct MF</h4>
                    <p style={{fontSize:"15px",marginTop:"15px",lineHeight:"25px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;
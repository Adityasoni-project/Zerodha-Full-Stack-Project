import React from 'react';

function Universe() {
    return ( 
        <div className='container p-5 '>
            <div className='row  px-5 text-center ' >
                <h4 style={{marginTop:"35px",color:"#424242",marginBottom:"22px"}}>The Zerodha Universe</h4>
                <p style={{color:"#424242",marginBottom:"75px"}}>Extend your trading and investment experience even further with our partner platforms</p>
                
                
                <div className='col-4 ' >
                    <img src="media/smallcaseLogo.png" />
                    <p style={{fontSize:"12px",marginTop:"15px"}}>Thematic investing platform <br />
                    that helps you invest in diversified<br/>
                    baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 ' >
                    <img src="media/streakLogo.png" style={{width:"175px"}}/>
                    <p style={{fontSize:"12px",marginTop:"10px"}}>Thematic investing platform <br />
                    that helps you invest in diversified<br/>
                    baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 ' >
                    <img src="media/sensibullLogo.svg" style={{width:"199px"}}/>
                    <p style={{fontSize:"12px",marginTop:"32px"}}>Thematic investing platform <br />
                    that helps you invest in diversified<br/>
                    baskets of stocks on ETFs.</p>
                </div>


                <div className='col-4 mt-5' >
                    <img src="media/dittoLogo.png" style={{width:"159px"}}/>
                    <p style={{fontSize:"12px",marginTop:"15px"}}>Thematic investing platform <br />
                    that helps you invest in diversified<br/>
                    baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 mt-5' >
                    <img src="media/smallcaseLogo.png" style={{width:"199px",marginTop:"0px"}}/>
                    <p style={{fontSize:"12px",marginTop:"15px"}}>Thematic investing platform <br />
                    that helps you invest in diversified<br/>
                    baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 mt-5' >
                    <img src="media/smallcaseLogo.png" style={{width:"199px"}}/>
                    <p style={{fontSize:"12px",marginTop:"15px"}}>Thematic investing platform <br />
                    that helps you invest in diversified<br/>
                    baskets of stocks on ETFs.</p>
                </div>
                
                <button style={{width:"203px",marginTop:"50px",marginBottom:"25px",marginLeft:"390px",fontSize:"19px", height:"44px",padding:"10px,30px",backgroundColor:"#387ED1",color:"#FFFFFF",borderRadius:"5px",border:"0px"}}>Sign up for free</button>
            </div>
        </div>
            
     );
}

export default Universe;
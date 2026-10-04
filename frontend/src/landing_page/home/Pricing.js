import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5 ' style={{color:"#424242"}}>
                    <h3>Unbeatable pricing</h3>
                    <p style={{fontSize:"18",marginTop:"25px",lineHeight:"28px"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' >See pricing 
                        <i class="fa fa-long-arrow-right" aria-hidden="true" style={{padding:"5px"}}></i>
                    </a>
                </div>
            
                
                <div className='col-6 pt-5'>
                        
                    <span>
                        <span style={{position:"absolute",color:"orange",fontSize:"25px",paddingTop:"28px" }}>&#8377;</span> 
                        <span style={{fontWeight:"bold",fontSize:"80px",color:"orange",paddingLeft:"15px"}}>0</span>
                        <span style={{fontSize:"10px"}}>Free account opening</span>


                        <span style={{position:"absolute",color:"orange",fontSize:"25px",paddingTop:"28px" }}>&#8377;</span> 
                        <span style={{fontWeight:"bold",fontSize:"80px",color:"orange",paddingLeft:"15px"}}>0</span>
                        <span style={{fontSize:"10px"}}>Free equity delivery </span>

                        <span style={{position:"absolute",color:"orange",fontSize:"25px",paddingTop:"28px" }}>&#8377;</span> 
                        <span style={{fontWeight:"bold",fontSize:"80px",color:"orange",paddingLeft:"15px"}}>20</span>
                        <span style={{fontSize:"10px",marginBottom:"50px"}}>Intraday and
                        F&O</span>
                            
                    </span>

                </div>
                
            </div>
        </div>
     );
}

export default Pricing;
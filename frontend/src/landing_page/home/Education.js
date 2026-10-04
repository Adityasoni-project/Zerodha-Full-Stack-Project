import React from 'react';

function Education() {
    return ( 
        <div className='container p-3 ' >
            <div className='row'>
                <div className='col-6 'style={{paddingLeft:"60px"}}>
                    <img src='media/education.svg' />
                </div>
                <div className='col-6 p-5 '>
                    <h2 style={{color:"#424242", marginBottom:"22px"}}>Free and open market education</h2>
                    <p className='mb-3 'style={{color:"#424242 ",fontSize:"18px",lineHeight:"30px"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' style={{textDecoration:"none"}}>Varsity
                            <i class="fa fa-long-arrow-right" aria-hidden="true" style={{padding:"5px"}}></i>
                    </a>

                    <p className='mb-3 'style={{color:"#424242 ",fontSize:"18px",lineHeight:"30px",marginTop:"25px"}}>Trading Q&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' style={{textDecoration:"none"}}>Trading Q&A 
                            <i class="fa fa-long-arrow-right" aria-hidden="true" style={{padding:"5px"}}></i>
                    </a>

                </div>
            </div>
        </div>
     );
}

export default Education;
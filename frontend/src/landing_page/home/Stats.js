import React from 'react';

function Stats() {
    return ( 
        <div className='container p-5 '>
            <div className='row p-5'> 
                <div className='col-6 p-5' style={{color:"#424242"}}>
                    <h2 className='mb-5 '>Trust with confidence</h2>

                    <h4>Customer-first always</h4>
                    <p style={{fontSize:"17",marginBottom:"40px",lineHeight:"30px"}}>That's why 1.8+ crore customers trust Zerodha with ~ ₹9 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h4>No spam or gimmicks</h4>
                    <p style={{fontSize:"17",marginBottom:"40px",lineHeight:"30px"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h4>The Zerodha universe</h4>
                    <p style={{fontSize:"17",marginBottom:"40px",lineHeight:"30px"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h4>Do better with money</h4>
                    <p style={{fontSize:"17",marginBottom:"40px",lineHeight:"30px"}}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    
                </div>
                <div className='col-6 ' style={{paddingTop:"85px"}}>
                    <img src='media/ecosystem.png' style={{width:"580px",height:"570px"}}/>
                    <div className='text-center'>
                        <a href=''className='mx-5'style={{textDecoration:"none"}}>Explore our products
                            <i class="fa fa-long-arrow-right" aria-hidden="true" style={{padding:"5px"}}></i>
                        </a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite demo
                            <i class="fa fa-long-arrow-right" aria-hidden="true" style={{padding:"5px"}}></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;
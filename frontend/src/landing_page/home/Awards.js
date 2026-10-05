import React from 'react';

function Awards() {
    return ( 
        <div className='container p-3 mb-5 ' >
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/largestBroker.svg' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h3 style={{color:"#424242",marginBottom:"30px"}}>Largest stock broker in India</h3>
                    <p className='mb-5 'style={{color:"#424242"}}>2+ million zerodha clints contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Features and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Curruncy derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Gov. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/pressLogos.png' style={{width:"480px"}}/>
                </div>
            </div>
        </div>
     );
}

export default Awards;
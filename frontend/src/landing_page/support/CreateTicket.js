import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container pt-3'>
            <div className='row py-3 '>
            <div className='col'>
                <div class="dropdown-center w-100 m-0 p-0" style={{position:"relative"}}>
                    <button class="btn w-100 d-flex justify-content-between align-items-center dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"50px"}}>
                        <span style={{marginLeft:"40px",fontSize:"20px"}} >Account Opening</span>
                    </button>
                    <ul class="dropdown-menu " style={{position: "relative", transform: "none", top: "0",width:"99%"}}>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Resident individual</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Minor</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Non Resident Indian (NRI)</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Company, Partnership, HUF and LLP</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Glossary</a></li>
                    </ul>
                </div>

                <div class="dropdown-center w-100 mt-4 p-0" style={{position:"relative"}}>
                    <button class="btn w-100 d-flex justify-content-between align-items-center dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"50px"}}>
                        <span style={{marginLeft:"40px",fontSize:"20px"}} >Your Zerodha Account</span>
                    </button>
                    <ul class="dropdown-menu " style={{position: "relative", transform: "none", top: "0",width:"99%"}}>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Your Profile</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Account modification</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Nomination</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Transfer and conversion of securities</a></li>
                    </ul>
                </div>

                <div class="dropdown-center w-100 mt-4 p-0" style={{position:"relative"}}>
                    <button class="btn w-100 d-flex justify-content-between align-items-center dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"50px"}}>
                        <span style={{marginLeft:"40px",fontSize:"20px"}} >Kite</span>
                    </button>
                    <ul class="dropdown-menu " style={{position: "relative", transform: "none", top: "0",width:"99%"}}>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>IPO</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Trading FAQs</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Margin Trading Facility (MTF) and Margins</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Charts and orders</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Alerts and Nudges</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>General</a></li>
                        
                    </ul>
                </div>

                <div class="dropdown-center w-100 mt-4 p-0" style={{position:"relative"}}>
                    <button class="btn w-100 d-flex justify-content-between align-items-center dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"50px"}}>
                        <span style={{marginLeft:"40px",fontSize:"20px"}} >Funds</span>
                    </button>
                    <ul class="dropdown-menu " style={{position: "relative", transform: "none", top: "0",width:"99%"}}>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Add money</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Withdraw money</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Add bank accounts</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>eMandates</a></li>
                        
                        
                    </ul>
                </div>

                <div class="dropdown-center w-100 mt-4 p-0" style={{position:"relative"}}>
                    <button class="btn w-100 d-flex justify-content-between align-items-center dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"50px"}}>
                        <span style={{marginLeft:"40px",fontSize:"20px"}} >Console</span>
                    </button>
                    <ul class="dropdown-menu " style={{position: "relative", transform: "none", top: "0",width:"99%"}}>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Portfolio</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Corporate actions</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Funds statement</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Reports</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Profile</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Segments</a></li>
                        
                    </ul>
                </div>

                <div class="dropdown-center w-100 mt-4 p-0 " style={{position:"relative"}}>
                    <button class="btn w-100 d-flex justify-content-between align-items-center dropdown-toggle border" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{height:"50px"}}>
                        <span style={{marginLeft:"40px",fontSize:"20px"}} >Coin</span>
                    </button>
                    <ul class="dropdown-menu " style={{position: "relative", transform: "none", top: "0",width:"99%"}}>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Mutual funds</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>National Pension Scheme (NPS)</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Fixed Deposit (FD)</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Features on Coin</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>Payments and Orders</a></li>
                        <li style={{display: "list-item", listStyleType: "disc", listStylePosition: "inside", color: "#0d6efd", marginLeft: "15px"}}><a class="dropdown-item" href='' style={{color: "inherit", display: "inline-block", width: "auto", paddingLeft: "5px"}}>General</a></li>
                        
                    </ul>
                </div>

            </div>

            <div className='col-4 px-5'>
                <div className='row border-start border-5 border-warning ' style={{backgroundColor:"#FFECDC"}}> 
                    <ul>
                        <li style={{display: "list-item" ,listStyleType: "disc", listStylePosition: "inside",color: "#0d6efd", marginLeft: "15",marginTop:"15px"}}><a href='' style={{textDecoration:"none"}}>Surveillance measure on scrips - October 2026</a></li>
                        <li style={{display: "list-item" ,listStyleType: "disc", listStylePosition: "inside",color: "#0d6efd", marginLeft: "15",marginTop:"15px"}}><a href='' style={{textDecoration:"none"}}>Latest Intraday leverages and Square-off timings</a></li>
                    </ul>
                </div>

                <div className='row mt-3 border' style={{}}>
                    <h5 className='mt-2'>Quick links</h5> <hr/>
                    <ol>
                        <li style={{display: "list-item" , listStylePosition: "inside",color: "#0d6efd", marginLeft: "15",marginTop:"7px",}}><a href='' style={{textDecoration:"none" ,fontSize:"16px"}}>Track account opening</a></li>
                        <li style={{display: "list-item" , listStylePosition: "inside",color: "#0d6efd", marginLeft: "15",marginTop:"15px"}}><a href='' style={{textDecoration:"none",fontSize:"16px"}}>Track segment activation</a></li>
                        <li style={{display: "list-item" , listStylePosition: "inside",color: "#0d6efd", marginLeft: "15",marginTop:"15px"}}><a href='' style={{textDecoration:"none",fontSize:"16px"}}>Intraday margins</a></li>
                        <li style={{display: "list-item" , listStylePosition: "inside",color: "#0d6efd", marginLeft: "15",marginTop:"15px"}}><a href='' style={{textDecoration:"none",fontSize:"16px"}}>Kite user manual</a></li>
                        <li style={{display: "list-item" , listStylePosition: "inside",color: "#0d6efd", marginLeft: "15",marginTop:"15px"}}><a href='' style={{textDecoration:"none",fontSize:"16px"}}>Learn how to create a ticket</a></li>
                    </ol>
                </div>
            </div>
            </div>
        </div>
     );
}

export default CreateTicket;
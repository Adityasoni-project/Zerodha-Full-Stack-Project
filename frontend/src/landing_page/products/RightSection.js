import React from 'react';

function RightSection({imageURL,productName,productDescription,learnMore,}) {
    return (
        <div className='container p-5 '>
            <div className='row  px-5 ' >
                
                <div className='col-6 mt-5 pt-5' >
                    <h4 style={{marginRight:"180px",color:"#424242",marginBottom:"20px"}}>{productName}</h4>
                    <p  style={{marginRight:"180px",fontSize:"14.5px",lineHeight:"26px",color:"#424242"}}>{productDescription} </p>
                    
                    <a  href={learnMore} style={{marginRight:"75px",textDecoration:"none"}} >Learn More <i class="fa fa-long-arrow-right" aria-hidden="true" style={{padding:"5px"}}></i></a>
                    

                </div>
                <div className='col-6 ' >
                    <img src={imageURL} style={{height:"450px",width:"500px"}}/>
                </div>
            </div>
        </div>
      );
}

export default RightSection;
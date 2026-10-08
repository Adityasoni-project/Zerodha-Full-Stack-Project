import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container p-5'>
            <div className='row  px-5'>
                <div className='col-6' >
                    <img src={imageURL} style={{width:"510px",height:"385px"}}/>
                </div>
                <div className='col-6 mt-5' >
                    <h4 style={{marginLeft:"180px",color:"#424242",marginBottom:"20px"}}>{productName}</h4>
                    <p  style={{marginLeft:"180px",fontSize:"14.5px",lineHeight:"26px",color:"#424242"}}>{productDescription} </p>
                    <div  >
                        <a  href={tryDemo} style={{marginLeft:"180px",textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true" style={{padding:"5px"}}></i></a>
                        <a  href={learnMore} style={{marginLeft:"60px",textDecoration:"none"}} >Learn More <i class="fa fa-long-arrow-right" aria-hidden="true" style={{padding:"5px"}}></i></a>
                    </div>
                    <div className='mt-4'>
                        <a  style={{marginLeft:"180px"}} href={googlePlay} ><img src="media/googlePlayBadge.svg" /></a>
                        <a   href={appStore} ><img src="media/appstoreBadge.svg"style={{marginLeft:"20px"}} /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;
import React from 'react';

function Navbar() {
    return ( 
       <nav class="navbar navbar-expand-lg  border-bottom fixed-top " style={             {backgroundColor:"white"}}>
            <div class="container ">
                <a class="navbar-brand ms-5 ps-5" href="#">
                <img src='media/logo.svg' alt='logo' style={{width:"150px",height:"23"}}/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Signup</a>
                        </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Support</a>
                            </li>

                        </ul>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
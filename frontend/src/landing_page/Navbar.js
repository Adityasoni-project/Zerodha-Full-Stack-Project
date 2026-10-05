import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
       <nav class="navbar navbar-expand-lg  border-bottom fixed-top " style={{backgroundColor:"white"}}>
            <div class="container ">
                <Link class="navbar-brand ms-5 ps-5" to="/">
                <img src='media/logo.svg' alt='logo' style={{width:"150px",height:"23"}}/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
                        </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/support">Support</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href='' style={{ color: "#424242", fontSize: "20px",marginLeft:"15px" }}>
                                    <i className="fa fa-align-justify" title="Menu"></i>
                                </Link>
                            </li>
                            
                        </ul>
                    
                </div>
    
            </div>
        </nav>
    );
}

export default Navbar;
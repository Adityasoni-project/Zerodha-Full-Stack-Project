import React from 'react';

function Hero() {
    return (
        <div style={{backgroundColor:"#F2F2F2"}}>
        <div className='container'>
            <div className='row mt-5 pt-5'>
                <div className='col text-muted'>
                    <h2>Support</h2>
                </div>
                <div className='col text-end'>
                    <div class=" d-md-block">
                        <button class="btn btn-primary" type="button" style={{backgroundColor:"#397DD0"}}>Mt tickets</button>
                    </div>
                </div>

                <form className="d-flex w-100 my-5 pb-4 " role="search">
                    <div className="position-relative w-100">
                        {/* Search Icon */}
                        <i className="fa fa-search position-absolute top-50 translate-middle-y text-muted" aria-hidden="true"
                        style={{ left: "15px", zIndex: 2 }}></i>
    
                        {/* Input Field */}
                        <input className="form-control" type="search" 
                        placeholder="Eg: How do I open my account, How do i activate F&O..." aria-label="Search" style={{ height: "50px", paddingLeft: "40px" }}  />
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Hero;
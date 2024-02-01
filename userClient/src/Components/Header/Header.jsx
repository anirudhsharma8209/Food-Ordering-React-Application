import React, { Fragment, useState } from 'react'
import categories from '../Data/dataArrays'
import Main from '../Main/Main'
import SingleProduct from '../Main/SingleProduct'
const Header = ({headerEnable, setHeaderEnable}) => {            
    // console.log(headerEnable);
    return (headerEnable == false) ? <SingleProduct  /> :  (
    <Fragment>
        <div className="container">
        <h3 className='lead fw-bolder text-center mt-1 fs-3'>What's on your Mind...?</h3>
        <div className="container mt-3 cursor-pointer justify-content-center align-items-top p-3 d-flex flex-wrap">                
            {
                categories.map((element, index) => (
                    <div className="card bg-dark text-white m-1 col-lg-2" key={index}>
                        <div className="card-header">
                            {element.name}
                        </div>
                        <div className="card-body">
                            <img src={element.photo_url} alt="photourl" className='img-fluid h-100 w-100 rounded' />
                        </div>
                    </div>
                ))
            }
            <img src="https://cdn-icons-png.flaticon.com/512/4813/4813075.png" className='img-fluid menu-icon mr-5' alt=""  />
        </div>
        </div>
        <Main headerEnable={headerEnable} setHeaderEnable={setHeaderEnable} />
    </Fragment>       
  )
}

export default Header;
import React, { Fragment } from 'react'
import { IMG_CDN_URL } from '../../Utils/Constant';
const SingleProduct = ({selectedRestaurant, header}) => {
  return (
    <Fragment>
        {
            console.log(selectedRestaurant.info)
        }
        <div className="container bg-dark text-white d-flex">
            <div className="col-lg-6 h-75 p-3 d-flex justify-content-center align-items-center">
                <img src={IMG_CDN_URL + selectedRestaurant.info.cloudinaryImageId} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-6 border">
                
            </div>
        </div>
    </Fragment>
  )
}

export default SingleProduct
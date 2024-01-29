import React, { Fragment } from 'react'
import categories from '../Data/dataArrays'
import Main from '../Main/Main'
const Header = () => {        
    return (
    <Fragment>
        <div className="container mt-3 cursor-pointer justify-content-center align-items-top p-3 d-flex flex-wrap">            
            {
                categories.map((element, index) => (
                    <div className="card bg-dark text-white m-1 col-lg-2">
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
        <Main />
    </Fragment>
  )
}

export default Header;
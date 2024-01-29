import React, { Fragment } from 'react'
import "./Navigation.css"
const Navigation = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg d-flex align-items-center justify-content-evenly navbar-nav bg-light'>
        <div className="container-fluid">
          <a className="navbar-brand text-dark">
            <img src="images/brand_image.png" id='icon-img' alt="icon" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id='navbarSupporte'>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-start align-items-center">
              <li className='nav-item d-flex justify-content-end col-lg-8 mr-5'>                  
              </li>
              <li className="nav-item d-flex justify-content-end align-items-center">
                <span className="address text-truncate col-lg-6">
                  Address Naya Bazar Holi Dara
                </span>
                <i className="bi bi-arrow-down-short fw-bold fs-3 col-lg-3"></i>
                <span className='text-decoration-underline m-2 fw-bolder p-2'>
                  Home
                </span>
                <i class="bi bi-basket fs-4"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navigation
import React, { Fragment, useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import { IMG_CDN_URL } from '../../Utils/Constant';
import Loader from '../../Utils/Loader';
import axios, { all } from 'axios';
const Main = ({headerEnable, setHeaderEnable}) => {
  console.log(headerEnable);
  const [allRestaurant, setAllRestaurant] = useState("");
  const [filterSearch, setFilterSearch] = useState("");
  const [singleProduct, setSingleProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState();  
  const fetchRestaurant = async () => {
    let API = await axios.get('https://food-sale-server.vercel.app/api/restaurants').then((data) => data.data)
    for (let i of API?.data?.cards) {
      let checkData = i.card?.card.gridElements?.infoWithStyle?.restaurants;
      if (checkData !== undefined) {
        return checkData
      }
    }
  }

  const filterRestaurant = () => {        
    let filtered = allRestaurant.map((element, index) => (       
        element.info.cuisines.filter((itemArray, index) => (
          (itemArray  == filterSearch)
        ))            
    )).filter((elemt, index) => { return elemt.length  != 0 && elemt.push({info : allRestaurant[index].info}) } )                
    console.log(filtered);
    // setAllRestaurant(filtered);
  }
  useEffect(() => {    
    fetchRestaurant().then((data) => setAllRestaurant(data))
  }, []);
  return !allRestaurant ? <Loader /> : ( 
    !singleProduct 
      &&
      <Fragment>        
        <div className="container">
          <div className="header_bar row d-flex justify-content-between align-content-center">
            <h3 className='text-dark col-lg-4'>Top Rated Restaurant</h3>
            <div className="search_bar col-lg-4 d-flex justify-content-between align-items-center ">
              <input type="text" className='form-control' placeholder="Hey Foodie....." value={filterSearch} onChange={(e) => {setFilterSearch(e.target.value); filterRestaurant()}} />            
            </div>
          </div>
          <div className="container-fluid text-white flex-wrap h-full d-flex justify-content-around align-items-center">
            {
              allRestaurant != '' &&
              allRestaurant.map((element, index) => (
                <div className="card mt-4 col-lg-3  rounded-2 m-1" onClick={() => {setSingleProduct(true); setSelectedProduct(element); setHeaderEnable(false)   } } style={{ height: "20rem", cursor : "pointer" }} key={index}>
                  <img src={IMG_CDN_URL + element.info.cloudinaryImageId} className='rounded-3 img-fluid' style={{ height: "145px", width: "200px" }} />
                  <div className="card-body text-dark p-1">
                    <div className="card-title text-dark fw-bolder fs-5 lead p-0">
                      {element.info.name} <br />
                    </div>
                    <div className="card-text p-0 text-truncate text-sm-start text-dark">
                      <span className='text-normal text-wrap'>
                        {
                          element.info.cuisines.map((item, index) => (
                            (index == 0) ? item : ", " + item
                          ))
                        }
                      </span>
                      <div className="icons">
                        {element.info.avgRating >= 4.2
                          ?
                          <div className="icon_color">
                            <span className='icon bg-success rounded-3 text-white fw-bold' style={{ padding: "4px", paddingRight : "14px" }}>
                              <i className="bi bi-star-fill fs-5 text-warning p-2"></i>
                              {element.info.avgRating}
                            </span>
                            <span className='fw-bold' style={{margin : "20px"}}>.</span>
                            <span className='fw-bold' style={{margin: "6px"}}>{element.info.costForTwo}</span>
                          </div>
                          :
                          <div className="icon_color">
                            <span className='icon bg-danger rounded-3 text-white fw-bold' style={{ padding: "4px", paddingRight : "14px" }}>
                              <i className="bi bi-star-fill text-warning p-2"></i>
                              {element.info.avgRating}
                            </span>
                            <span className='fw-bold' style={{margin : "20px"}}>.</span>
                            <span className='fw-bold mt-4 mr-5' style={{margin: "6px"}}>{element.info.costForTwo}</span>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </Fragment>
    // :       
  )
}

export default Main
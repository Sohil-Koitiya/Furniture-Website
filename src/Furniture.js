import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { products } from './Product'

function Furniture() {

   // console.log(products);


  return (
    <div>
      
      <div className="furnitures_section layout_padding">
         <div className="container">
            <h1 className="our_text">OUR furnitures</h1>
            <p className="ipsum_text">There are many variations of passages of Lorem Ipsum </p>
            <div className="furnitures_section2 layout_padding">
               <div className="row">
                  {products.map( (val) => (
                     
                  
                  <div className="col-md-6" key={val.id}>
                     <div className="container_main">
                        <Link to={`/shopping/${val.id}`}><img src={`images/${val.url}`} alt="Avatar" className="image"/></Link>
                        <div className="overlay">
                           <a href="#" className="icon" title="User Profile">
                           <i className="fa fa-search"></i>
                           </a>
                        </div>
                     </div>
                     <h3 className="temper_text">{val.title}</h3>
                     <p className="dololr_text">{val.details} </p>
                  </div>

                  ) )}

               </div>
            </div>
         </div>
      </div>
         
    </div>
  )
}

export default Furniture

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "./Product";

function Shopping() {
  const { id } = useParams();

  const productSingleData = products.find((data) => {
    // console.log(id);
    return data.id == id;
  });

  console.log(productSingleData);

  return (
    <div>
      

      <div className="container">
        <div className="row d-flex">
          <div className="col-xl-8 p-2">
            <img
              src={`/Images/${productSingleData.url}`}
              className="border border-light rounded"
            ></img>
            <h3 className="temper_text">{productSingleData.title}</h3>
            <p className="dololr_text">{productSingleData.details}</p>
          </div>
          <div className="col-xl-4 p-2 mt-5">
            <Link to={`/Addtocart/${productSingleData.id}`}>
              <button className="btn btn-primary my-3">Add to cart</button>
            </Link>
            <h3 className="my-2">{productSingleData.price}</h3>
            <p className="my-3">{productSingleData.details}</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Shopping;

import React from "react";
import "./Guide.css";
import servingDish from "../../assets/serving-dish.png";
import placeholder from "../../assets/placeholder.png";
import foodDelivery from "../../assets/food-delivery.png";
import rightArrow from "../../assets/right.png";

export default function Guide() {
  return (
    <div className="row w-75 h-50 shadow-lg d-flex justify-content-center align-items-center" style={{borderRadius:'12px'}}>
      <div className="col-md-3 col-sm-12">
        <img
          src={placeholder}
          className="img-fluid"
          height="50px"
          width="65px"
          alt=""
        />
        <p>Set location</p>
      </div>

      <div className="col-md-2 col-sm-12">
        <img
          src={rightArrow}
          className="img-fluid arrow_img"
          height="30px"
          width="40px"
          alt=""
        />
        
      </div>

      <div className="col-md-2 col-sm-12">
        <img
          src={servingDish}
          className="img-fluid"
          height="70px"
          width="80px"
          alt=""
        />
        <p>Order food</p>
      </div>


      <div className="col-md-2 col-sm-12">
        <img
          src={rightArrow}
          className="img-fluid arrow_img"
          height="30px"
          width="40px"
          alt=""
        />
        
      </div>


      <div className="col-md-3 col-sm-12">
        <img
          src={foodDelivery}
          className="img-fluid"
          height="50px"
          width="65px"
          alt=""
        />
        <p>Get Delivery or Pick up</p>
      </div>
    </div>
  );
}

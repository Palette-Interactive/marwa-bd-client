import React from "react";
import './MenuRow.css'
import CardSlider from "../card-slider/CardSlider";

export default function MenuRow({foodItem}) {

  return (
    <div className="row" id={foodItem.title}>
      <div className="col-sm-12 col-md-5 menu_btn_container ">
        <div className="btn_container">
          <div className="home_menu_btn">{foodItem.title}</div>
        </div>
      </div>
      <div className="col-sm-12 col-md-7 menu_slider_container">
        {
          <CardSlider key={foodItem._id} items = {foodItem.items}/>
        }
      </div>
    </div>
  );
}

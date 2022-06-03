import React, { useEffect, useState } from "react";
import "./Menu.css";
import MenuRow from "../../../../components/menu-row/MenuRow";

export default function Menu({ MenuData }) {
  
  const [foodItem, setFoodItem] = useState({});

  useEffect(() => {
    setFoodItem(MenuData[0])
  }, [MenuData])
  

  return (
    <div className="menu_container" id="menu">
      <div>
        <div className="menu_title_container d-flex align-items-center justify-content-center">
          <div className="title_container menu_title">
            <div>Menu</div>
          </div>
        </div>
        <div className="pt-5">
          <div className="row px-md-5 px-sm-2">
            <nav className="nav px-3 d-flex align-items-center justify-content-center nav_list">
              {MenuData?.map((menuItem) => {
                return (
                  <div
                    key={menuItem._id}
                    className="nav-link text-wrap text-dark ul_hover_effect"
                    onClick={() => setFoodItem(menuItem)}
                  >
                    {menuItem.title}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
      {foodItem && <MenuRow foodItem={foodItem} />}
    </div>
  );
}

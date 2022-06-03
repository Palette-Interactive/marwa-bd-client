import React from "react";
import "./MenuNav.css";

export default function MenuNav({ MenuData }) {
  return (
    <nav className="nav px-3 py-3 d-flex align-items-center justify-content-center menuNav_list">
      {MenuData?.map((menuItem) => {
        return (
          <a href={"#"+menuItem.title}
            key={menuItem._id}
            className="nav-link text-wrap text-light ul_hover_effect_menuNav"
          >
            {menuItem.title}
          </a>
        );
      })}
    </nav>
  );
}

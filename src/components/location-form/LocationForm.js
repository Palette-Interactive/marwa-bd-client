import React from "react";
import "./LocationForm.css";

export default function LocationForm() {
  return (
    <div className="mt-4 searchBar_container d-flex align-items-center shadow rounded-pill">
      <div className="mx-4 d-flex align-items-center justify-content-between w-100">
        <input
          type="text"
          className="searchBar d-none .d-sm-none .d-md-block"
          placeholder="Search location..."
          name=""
        />
        <div className="d-flex align-items-center justify-content-between w-100">
          <button className="btn btn-sm btn-danger rounded-pill w-50">
            <a href="/order" className="nav-link fw-bold text-light">
              Delivery
            </a>
          </button>
          <div className="px-3 fw-bold"> or </div>
          <button className="btn btn-sm btn-danger rounded-pill w-50">
            <a href="/order" className="nav-link fw-bold text-light">
              Pickup
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

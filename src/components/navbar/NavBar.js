import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import marwaLogo from "../../assets/marwa_logo_v2.png";

export default function NavBar() {
  let { pathname } = useLocation();


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-4">
        <div className="container">
          <a className="navbar-brand" href="/home">
            <img src={marwaLogo} className="img-fluid" alt="" width="185px" height="130px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={
                pathname === "/order"
                  ? "navbar-nav ms-auto mb-2 mb-lg-0"
                  : "navbar-nav mx-auto mb-2 mb-lg-0"
              }
            >
              <li className="nav-item">
                <Link
                  className="nav-link text-danger nav_font"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              {pathname === "/" || pathname === "/home" ? (
                <li className="nav-item">
                  <a className="nav-link text-danger nav_font" href="#menu">
                    Menu
                  </a>
                </li>
              ) : (
                <a
                  className="btn btn-outline-danger py-2 px-4 rounded-pill fw-bolder numberFont"
                  href = "tel:+880 2-8900470"
                >
                  <i className="fa-solid fa-phone"></i> Order +880 2-8900470
                </a>
              )}

              {pathname === "/" || pathname === "/home" ? (
                <li className="nav-item">
                  <a
                    className="nav-link text-danger nav_font"
                    href="#reservation"
                  >
                    Reservation
                  </a>
                </li>
              ) : (
                ""
              )}
            </ul>
            <div className="d-md-flex">
              {pathname === "/" || pathname === "/home" ? (
                <Link
                  className="btn btn-outline-danger px-5 py-3 rounded-pill fw-bolder"
                  to="/order"
                >
                  Order
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

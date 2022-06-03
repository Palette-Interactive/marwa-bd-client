import React from "react";
import "./Reservation.css";
import marwaGallery from "../../../../assets/marwaGallery.jpg";
import marwaGallery2 from "../../../../assets/marwaGallery2.jpg";
import marwaGallery3 from "../../../../assets/marwaGallery3.jpg";
import marwaGallery4 from "../../../../assets/marwaGallery4.jpg";
import marwaGallery5 from "../../../../assets/marwaGallery5.jpg";

export default function Reservation() {
  return (
    <div className="reservation_container container-fluid" id="reservation">
      <div className="party_booking_heading">
        <h1 className="reservation_slogan">
          Party <span className="underlined">Booking</span>Available
        </h1>
      </div>
      <div className="row pt-md-5">
        <div className="col-lg-7 col-sm-12">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              
            </div>
            <div className="carousel-inner">

              <div className="carousel-item active reservation_img_container">
                <img src={marwaGallery} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item reservation_img_container">
                <img src={marwaGallery2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item reservation_img_container">
                <img src={marwaGallery3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item reservation_img_container">
                <img src={marwaGallery4} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item reservation_img_container">
                <img src={marwaGallery5} className="d-block w-100" alt="..." />
              </div>

            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
          </div>
        </div>
        <div className="col-lg-5 col-sm-12 reservation_div d-flex justify-content-center align-items-center">
          <div className="p-5 reservation_content_div">
            <p className="fs-5">
              {" "}
              Weddings | Anniversaries | Receptions | Birthday
            </p>
            <p className="pt-4">
              Marwa specializes in Weddings, Holuds, anniversaries, Birthday
              parties, Receptions and other Private Parties, Corporate and Press
              Events for groups from 5 to 500. We feature large private event
              spaces perfect for any occasion, as well as the option to book the
              entire restaurant. Menus can be customized.
            </p>
            {/* <p className="numberFont fst-italic text-muted mt-5"><i class="fa-solid fa-phone"></i>+880 2-8900470</p> */}
            <div className="mt-5 d-flex align-items-center justify-content-center">
              <div className="pb-2 border-bottom border-dark w-50">
                <i className="fa-solid fa-quote-left"></i> Call us for a Quote{" "}
                <i className="fa-solid fa-quote-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

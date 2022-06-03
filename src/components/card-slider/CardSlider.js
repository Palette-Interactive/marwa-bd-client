import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CardSlider.css";
import { useDispatch} from "react-redux";
import { cartActions } from "../../store/cartSlice";


export default function CardSlider({ items }) {
  
  let { pathname } = useLocation();

  const dispatch = useDispatch();

  function handleAddtoCart (item){
    dispatch(cartActions.addToCart(item))
  }

 



  return (
    <div className="card_holder_body">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide="2"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {items?.map((item) => {
          return (
            <SwiperSlide key={item._id}>
              <img
                src={item.image}
                alt="..."
              />
              <h3 className="card_item_name pt-2">{item.itemname}</h3>
              <h5 className="card_item_price">৳ {item.price}</h5>
              <div className="card_item_details">
                <h6>
                  {item.description}
                </h6>
              </div>
              {pathname === "/order" ? (
                <div>
                  <button onClick={()=> handleAddtoCart(item)} className="btn btn-sm btn-danger fw-bold">
                    Add to Cart
                  </button>
                </div>
              ) : (
                <div className="d-flex justify-content-center align-items">
                  <Link
                    className="nav-link btn btn-sm btn-danger fw-bold w-50 text-light"
                    to="/order"
                  >
                    ORDER <i className="fa-solid fa-chevron-right"></i>
                  </Link>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

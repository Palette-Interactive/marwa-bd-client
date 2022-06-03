import React from "react";
import "./CartButton.css";
import cart from "../../assets/cart.png";
import mLogo from "../../assets/marwaLogo.png";
import emptyCart from "../../assets/emptyCart.png";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/CartItem";
import CartForm from "../cart-form/CartForm";

export default function CartButton() {
  const cartItems = useSelector((state) => state.cart.itemList);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  let grandTotalPrice = 0;
  cartItems.forEach((cartItem) => {
    return (grandTotalPrice = grandTotalPrice + cartItem.totalPrice);
  });

  
  return (
    <div className="cart_btn_container d-flex justify-content-end align-items-center">
      <div
        className="cart_btn me-1 shadow-lg"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <img
          src={cart}
          className="img-fluid"
          height="100px"
          width="100px"
          alt=".."
        />

        <span className="position-absolute end-50 translate-middle p-2 badge bg-success border border-light rounded-circle">
          {cartItems.length}
        </span>
      </div>

      {/* cart button offcanvas side modal starts here */}

      <div
        className="offcanvas offcanvas-start offCanvas_modal"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header ">
          <img src={mLogo} className="img-fluid" width="100px" alt="" />

          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body container">
          {cartItems.length > 0 ? (
            <div>
              {cartItems?.map((cartItem) => {
                return <CartItem cartItem={cartItem} key={cartItem._id} />;
              })}
              <div className="d-flex justify-content-between px-4 border-top border-dark pb-4">
                <span className="fw-bold">Total</span>
                <span className="numberFont fw-bold"> No. of Item: {totalQuantity}</span>
                <span className="numberFont fw-bold">৳ {grandTotalPrice}</span>
              </div>
            </div>
          ) : (
            <div className="pb-5">
              <img src={emptyCart} className="img-fluid" alt="" />
              <p>Your Cart is now Empty</p>
            </div>
          )}

          <div>
            <CartForm cartItems={cartItems} totalQuantity={totalQuantity} grandTotalPrice={grandTotalPrice}  />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import "./CartItem.css";

export default function CartItem({cartItem}) {

  

const dispatch = useDispatch();
 
 function incrementCartItem(cartItem){
    dispatch(cartActions.addToCart(cartItem));
 }

 function decrementCartItem(cartItem){
    dispatch(cartActions.removeFromCart(cartItem));
 }


  return (
    <div className="cart_item_cards m-2 mb-3 px-3 py-2 d-flex justify-content-between align-items-center">
      <img src={cartItem.image} className="img-fluid" width="40px" alt="" />
      <h6 className="d-inline text-wrap ps-1 text-start w-50">
        {cartItem.itemname}
      </h6>
      
      <button onClick={()=>incrementCartItem(cartItem)} className="btn btn-sm px-2 lh-1 btn-outline-danger fw-bold fs-4">
        +
      </button>
      <span className="numberFont d-inline m-2 cart_item_number">x{cartItem.quantity}</span>
      <button onClick={()=>decrementCartItem(cartItem)} className="btn btn-sm px-2 lh-1 btn-outline-danger fw-bold fs-4">
        -
      </button>
      <span className="numberFont d-inline ms-2 cart_item_number">৳{cartItem.totalPrice}</span>
    </div>
  );
}

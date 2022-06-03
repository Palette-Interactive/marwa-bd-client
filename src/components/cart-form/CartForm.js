import React, { useState } from "react";
import { httpSubmitOrder } from "../../fetch-requests/request";
import "./CartFrom.css";

export default function CartForm({ cartItems, grandTotalPrice, totalQuantity }) {
  //form states
  const [fullName, setFullName] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [transferProcess, setTransferProcess] = useState("");
  const [location, setLocation] = useState("");

  const handleOnChange = (e) => {
    if (e.target.name === "fullName") {
      setFullName(e.target.value);
    } else if (e.target.name === "ContactNumber") {
      setContactNumber(e.target.value);
    } else if (e.target.name === "transferProcess") {
      setTransferProcess(e.target.value);
    } else if (e.target.name === "location") {
      setLocation(e.target.value);
    }
  };

   async function handleForm (e){
    e.preventDefault();
    const orderData = {cartItems,totalQuantity, grandTotalPrice, fullName, ContactNumber, transferProcess, location };
    const response = await httpSubmitOrder(orderData);
    console.log(response);
  };

  return (
    <form onSubmit={handleForm}>
      <input
        type="text"
        name="fullName"
        onChange={handleOnChange}
        className="mb-3 form_input"
        placeholder="Enter your name"
        required
      />

      <div className="d-md-flex gap-2">
        <input
          type="Number"
          name="ContactNumber"
          className="mb-3 form_input"
          placeholder="+880 Contact number"
          onChange={handleOnChange}
          required
        />
        <select
          className="mb-3 form_input text-muted"
          name="transferProcess"
          onChange={handleOnChange}
          required
        >
          <option className="text-info">Delivery / Pickup ?</option>
          <option value="delivery">Delivery</option>
          <option value="pick-up">Pick up</option>
        </select>
      </div>
      {transferProcess === "delivery" && (
        <input
          type="text"
          name="location"
          className="mb-3 form_input"
          placeholder="Enter your Location"
          onChange={handleOnChange}
          required
        />
      )}

      {transferProcess === "pick-up" && (
        <p className="text-success">
          <i className="fa-solid fa-location-crosshairs text-success me-2"></i>
          Pick up from{" "}
          <strong>H-2/B, Road No.-13, Nikunja-2, Khilkhet, Dhaka</strong>
        </p>
      )}

      <button className="btn btn-danger py-2 w-100 fw-bold" type="submit">
        Place Order
      </button>
      {/* {smsAlert && <p className="text-success">{smsAlert}</p>} */}
    </form>
  );
}

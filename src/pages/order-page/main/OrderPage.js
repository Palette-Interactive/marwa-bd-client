import React from "react";
import CartButton from "../../../components/cart-button-offCanvas/CartButton";
import MenuRow from "../../../components/menu-row/MenuRow";
// import FloatingNav from "../../../components/floating-nav/FloatingNav";
import NavBar from "../../../components/navbar/NavBar";
import Footer from "../../home-page/page-sections/footer-section/Footer";
import "./OrderPage.css";
import useMenuData from "../../../fetch-requests/useMenuData";
import MenuNav from "../../../components/menu-nav/MenuNav";

export default function OrderPage() {
  const MenuData = useMenuData();
  return (
    <div>
      <div className="position-relative">
        <NavBar />
        <MenuNav MenuData={MenuData} />
      </div>
      <CartButton />
      {MenuData?.map((foodItem) => {
        return <MenuRow foodItem={foodItem} key={foodItem._id} />;
      })}
      <Footer />
    </div>
  );
}

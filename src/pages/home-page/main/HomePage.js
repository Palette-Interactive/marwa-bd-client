import React from 'react'
import NavBar from '../../../components/navbar/NavBar'
import Footer from '../page-sections/footer-section/Footer'
import FormSection from '../page-sections/map-form-section/FormSection'
import Menu from '../page-sections/menu-section/Menu'
import OrderGuide from '../page-sections/order-guide-section/OrderGuide'
import Reservation from '../page-sections/resevation-section/Reservation'
import './HomePage.css'
import useMenuData from "../../../fetch-requests/useMenuData";

export default function HomePage() {

  const MenuData = useMenuData();

  return (
    <>
        <NavBar/>
        <FormSection/>
        <OrderGuide/>
        <Menu MenuData={MenuData}/>
        <Reservation/>
        <Footer/>
    </>
  )
}

import React from 'react'
import './FormSection.css'
import LocationForm from '../../../../components/location-form/LocationForm'
import SheekKabab from '../../../../assets/sheekKebab.png'

export default function FormSection() {
  return (
    <div className="formSection_container container d-flex align-items-center" >
        <div className="row">
          <div className=" col-sm-12 col-lg-7 d-flex flex-column align-items-center justify-content-center">
            <h1 className="slogan">Hundreds of flavors. Yours to <span className="text-success slogan">savor!</span></h1>
            <h5 className="deliver_slogan mt-2 px-2">We are open for home delivery only in Nikunja.</h5>
            <LocationForm/>
          </div>
          <div className="col-sm-12 col-lg-5 mt-md-5 pt-md-5 d-flex align-items-center justify-content-center">
              <img src={SheekKabab} alt="" className="img-fluid"/>
          </div>
        </div>
    </div>
  )
}

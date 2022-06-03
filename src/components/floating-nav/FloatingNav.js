import React from 'react'
import'./FloatingNav.css'

export default function FloatingNav() {



  return (
    <div className="container menu-stekey">
        <div className="row">
        <div className="col-12 sticky_nav d-flex justify-content-center align-items-center">
        <div className=""> <i class="fa-solid fw-bold fs-4 pb-4 fa-chevron-left"></i> </div>
            <div className="cata-sub-nav">
                
                <ul className="box-st">
                    <li><a href="#Burger" className="btn-group active-btn">Burger</a></li>
                    <li><a href="#Kebab" className="btn-group active-btn">Kebab</a></li>
                    <li><a href="#Rice Meals" className="btn-group active-btn">Rice Meals</a></li>
                    <li><a href="#Biriyani" className="btn-group active-btn">Biriyani</a></li>
                    <li><a href="#Desi Meals" className="btn-group active-btn">Desi Meals</a></li>
                    <li><a href="#Wholesome Platters" className="btn-group active-btn">Wholesome Platters</a></li>
                </ul>
                
            </div>
            <div>  <i class="fa-solid pb-4 fs-4 fa-chevron-right"></i> </div>
        </div>
        </div>
    </div>
  )
}

import {React} from 'react';
import  "../index.css"
import  logo from "../logo.png"
import  Text from "./TranslatedText"

import ServicesNavButton from "./ServicesNavButton"


import {Link} from "react-router-dom";
import LanguageSelector from './LanguageSelector';

function SiteHeader() {

  return (
    <div className="site-header" >
      <div className="site-header_container">
        <div className="site-header_navContainer">

          <Link to="/main">
            <div id="logo">
              <img src={logo} className="logo" alt="logo"/>
            </div>
          </Link>

          <div className="siteHeaderNav">


            <Link to="/gallery">
              <div className="siteHeaderNavItem">
                <div id="gallery ">
                <Text tid="gallery"/>
                </div>
              </div>
            </Link>
            
            <ServicesNavButton/>

            <Link to="/contact">
            <div className="siteHeaderNavItem">
              <Text tid="contact"/>
            </div>
            </Link>

            <Link to="/how-it-works">
            <div className="siteHeaderNavItem">
              <div id="how-it-works ">
                <Text tid="how-it-works"/>
              </div>
            </div>
            </Link>

          </div>
          <div className="leftNavContainer">

            <div className="sign-in">
             <Text tid="sign_in"/>
            </div>

            <LanguageSelector />

            <div className="navShoppingCart">

            </div>

          </div>
          

        </div>
      </div>
    </div>
  );
}

export default SiteHeader


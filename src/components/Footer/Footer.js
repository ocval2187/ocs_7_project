import React from "react";
import logoWhite from '../../assets/logo_kasa_white.png'
import "./Footer.css";


function Footer() {
  return (
      <footer>
        <figure>
          <img src={logoWhite} alt="kasa" />
        </figure>
        <p>@2020 Kasa. All rights reserved</p>
      </footer>
  );
}

export default Footer;



import React from "react";
import "./Carousel.css";
import { useState } from "react";

function Carousel({ title, children }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="carousel-housing">
      <div className="item"> 
        <div className="carousel-housing-title" onClick={toggle}>
          <h2>{title}</h2>
          <span>{open ? "-" : "+"}</span>
        </div>

        <div className={open ? "carousel-content show" : "carousel-content"}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Carousel;

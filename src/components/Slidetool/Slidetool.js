import React, { useState } from "react";
import "./Slidetool.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slidetool({ pictures }) {
  const [current, setCurrent] = useState(0); 
  const length = pictures.length;

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="slideshow">
      <img src={pictures[current]} className="slide-image" alt="slides" />
      <FaChevronLeft onClick={previous} className="chevron-left">
        previous
      </FaChevronLeft>
      <FaChevronRight onClick={next} className="chevron-right">
        Next
      </FaChevronRight>
    </div>
  );
}

export default Slidetool;

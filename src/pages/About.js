import React from "react";
import DataAbout from "../data/dataAbout.json";
import Carousel from "../components/Carousel/Carousel";
import "../components/HomeField/HomeField.css";
import AboutImage from "../assets/AboutPicture.png";

function About() {
  return (
    <div>
      <div>
        <img
          src={AboutImage}
          className="about-image"
          alt="about-background"
        />
      </div>
      <div className="carousel-about-container">
        {DataAbout.map((dataAbout) => {
          return (
            <div className="carousel-about" key={dataAbout.id}>
              <Carousel title={dataAbout.title}>{dataAbout.content}</Carousel>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;


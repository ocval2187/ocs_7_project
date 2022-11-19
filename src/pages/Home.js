import React from "react";
import Cards from "../components/Cards/Cards";
import "../components/HomeField/HomeField.css";
import HomeFieldImage from "../assets/HomePicture.png";

function Home() {
  return (
    <>
      <div className="homefield-container">
        <h1>Chez vous, partout et ailleurs</h1>
        <img
          src={HomeFieldImage}
          className="about-image"
          alt="home-background"
        />
      </div>

      <Cards />
    </>
  );
}

export default Home;

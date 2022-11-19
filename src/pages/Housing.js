import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Data from "../data/data.json";
import Slidetool from "../components/Slidetool/Slidetool";
import HousingFeatures from "../components/HousingFeatures/HousingFeatures";
import Carousel from "../components/Carousel/Carousel";

function Housing() {
  const { id } = useParams();
  const housing = Data.find((item) => item.id === id); 
  console.log(housing)

  if (!housing) return <Navigate to="/404" />;

  return (
    <div>
      <Slidetool pictures={housing.pictures} />
      <HousingFeatures />
      <div className="carousel-container">
        <Carousel title="Description">{housing.description}</Carousel>
        <Carousel title="Equipements">
          {housing.equipments.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Housing;

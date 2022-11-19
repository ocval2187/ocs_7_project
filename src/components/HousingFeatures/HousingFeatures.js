import React from "react";
import Data from "../../data/data.json";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./HousingFeatures.css";

function HousingFeatures() {
  const { id } = useParams();
  const housing = Data.find((item) => item.id === id);
  const starColor = {
    red: "#ff6060",
    grey: "#E3E3E3",
  };

  const stars = Array(5).fill(0);

  return (
    <div className="housing-features-container">
      <div className="housing-features-details">
        <h2 className="housing-title">{housing.title}</h2>
        <span className="housing-location">{housing.location}</span>
        <div className="housing-tags">
          {housing.tags.map((tag) => (
            <div className="tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="housing-host-rating">
        <div className="host-infos-container">
          <span className="host-name">{housing.host.name}</span>
          <img className="host-profil" alt="housing" src={housing.host.picture} />
        </div>
        <div className="host-rating">
          <div className="stars">
            {stars.map((_, index) => (
              <FaStar
                key={index}
                className="stars"
                color={housing.rating > index ? starColor.red : starColor.grey}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HousingFeatures;

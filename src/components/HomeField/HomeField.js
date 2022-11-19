import React from "react";
import { Link } from "react-router-dom";
import "./HomeField.css";

function HomeField() {
  return (
    <div className="error-container">
      <span className="number-404">404</span>
      <p className="alert-404">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <p className="alert-404">
        Cliquez sur le logo ou les liens pour accéder à une autre page.
      </p>
      <Link to="/" className="home-redirection">
        <button className="return__button">
          Retournez sur la page d’accueil
        </button>
      </Link>
    </div>
  );
}

export default HomeField;

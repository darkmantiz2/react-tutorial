import React from "react";
import './index.scss'

const Card = ({ title, description, onClick }) => {
  return (
    <div className="card">
      <p className="card-title">{title}</p>
      <p className="card-description">{description}</p>
      <button className="card-btn" onClick={onClick}>
        Descargar
      </button>
    </div>
  );
};

export default Card;

import React from "react";

const DrProfileCard = () => {
  return (
    <>
      <div
        className="card text-center"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <img
          className="card-img-top profile-image"
          src="images/Dr feliz.png"
          alt="Doctora Sonrisa"
        />
        <div className="card-body" style={{ color: "white" }}>
          <h2 className="card-title" style={{ fontSize: "2rem" }}>
            Dra. Elizabeth
          </h2>
          <h2 className="card-title" style={{ fontSize: "2rem" }}>
            Sonrisa
          </h2>
          <p className="card-text">Odontologa Adultos, Niños y Adolescentes</p>
          <p className="card-text">Matricula Nacional N° 548324</p>
        </div>
      </div>
    </>
  );
};

export default DrProfileCard;

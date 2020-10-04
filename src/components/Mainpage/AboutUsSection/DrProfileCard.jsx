import React from 'react';

const DrProfileCard = () => {
  return (
    <>
      <div className="card text-center">
        <img
          className="card-img-top profile-image"
          src="images/Dr feliz.png"
          alt="Doctora Sonrisa"
        />
        <div className="card-body">
          <h2 className="card-title">Dra. Elizabeth</h2>
          <h2 className="card-title">Sonrisa</h2>
          <p className="card-text">Odontologa Adultos, Niños y Adolescentes</p>
          <p className="card-text">Matricula Nacional N° 548324</p>
        </div>
      </div>
    </>
  );
};

export default DrProfileCard;

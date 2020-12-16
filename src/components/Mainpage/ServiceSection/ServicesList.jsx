import React from "react";

const ServicesList = ({ servicesArray }) => {
  return (
    <ul>
      {servicesArray.map(function (servicio) {
        return <li key={servicio}> {servicio} </li>;
      })}
    </ul>
    // map, filter, find, forEach
  );
};

export default ServicesList;

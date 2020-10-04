import React from 'react';

const ServicesList = ({ servicesArray }) => {
  return (
    <ul>
      {servicesArray.map((services) => (
        <li>{services}</li>
      ))}
    </ul>
  );
};

export default ServicesList;

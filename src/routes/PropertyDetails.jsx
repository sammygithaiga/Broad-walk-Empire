import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

const PropertyDetails = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/property')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <ul>
          {properties.map(property => (
            <li key={property.id}>{property.name}</li>
            // Display other property details as needed
          ))}
        </ul>
      </div>
    </>
  );
};

export default PropertyDetails;

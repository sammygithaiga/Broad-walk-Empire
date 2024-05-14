import React, { useState, useEffect } from 'react';
import '../index.css';

const PropertyDetails = () => {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/property')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handlePropertyClick = property => {
    setSelectedProperty(property);
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {properties.map(property => (
          <div key={property.id} className="property-card">
            <h3>{property.name}</h3>
            <p>Location: {property.location}</p>
            <p>Price: {property.price}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Category: {property.category}</p>
            <img src={property.image} alt={property.name} />
            <button onClick={() => handlePropertyClick(property)}>
              Available
            </button>
          </div>
        ))}
      </div>
      {selectedProperty && (
        <div className="selected-property">
          <h2>{selectedProperty.name}</h2>
          <p>Location: {selectedProperty.location}</p>
          <p>Price: {selectedProperty.price}</p>
          <p>Bedrooms: {selectedProperty.bedrooms}</p>
          <p>Category: {selectedProperty.category}</p>
          <p>Description: {selectedProperty.description}</p>
          <img src={selectedProperty.image} alt={selectedProperty.name} />
          <button onClick={() => setSelectedProperty(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;

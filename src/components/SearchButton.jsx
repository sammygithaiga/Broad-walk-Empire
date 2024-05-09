import React, { useState, useEffect } from 'react';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
   
    fetch('http://localhost:3000/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const performSearch = () => {
    const filteredProperties = properties.filter(property =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProperties);
  };


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center space-x-4">
       
        <button
          onClick={performSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <ul>
        {searchResults.map(property => (
          <li key={property.id}>{property.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;

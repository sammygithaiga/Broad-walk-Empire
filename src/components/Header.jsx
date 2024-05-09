
import React, { useState, useEffect } from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Property Search</h1>
      </div>
    </header>
  );
};

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch data from API when component mounts
    fetch('http://localhost:3000/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Function to perform search
  const performSearch = () => {
    const filteredProperties = properties.filter(property =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProperties);
  };

  // Event handler for search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-8">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          />
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
    </div>
  );
};

export default PropertyList;

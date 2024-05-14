import React, { useState } from 'react';
import '../index.css'

const SearchProperty = () => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    location: '',
    price: '',
    bedrooms: '',
    category: ''
  });

  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/property?name=${searchParams.name}&location=${searchParams.location}&price=${searchParams.price}&bedrooms=${searchParams.bedrooms}&category=${searchParams.category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const properties = await response.json();
      setSearchResults(properties);
    } catch (error) {
      console.error('Error searching for properties:', error);
    }
  };

  return (
    <div className="search-property-container"> {/* Add container class */}
      <form onSubmit={handleSubmit} className="search-form"> {/* Add form and form class */}
        <input type="text" name="name" placeholder="Name" value={searchParams.name} onChange={handleChange} className="input-field" />
        <input type="text" name="location" placeholder="Location" value={searchParams.location} onChange={handleChange} className="input-field" />
        <input type="number" name="price" placeholder="Budget" value={searchParams.price} onChange={handleChange} className="input-field" />
        <input type="number" name="bedrooms" placeholder="Bedrooms" value={searchParams.bedrooms} onChange={handleChange} className="input-field" />
        <input type="text" name="category" placeholder="Category" value={searchParams.category} onChange={handleChange} className="input-field" />
        <button type="submit" className="submit-btn">Search</button>
      </form>
      <div className="search-results"> {/* Add search results div and class */}
        <h2 className="search-results-title">Search Results</h2> {/* Add search results title class */}
        <ul className="property-list"> {/* Add property list class */}
          {searchResults.map((property, index) => (
            <li key={index} className="property-item"> {/* Add property item class */}
              <h3 className="property-name">{property.name}</h3>
              <img src={property.image} alt={property.name} className="property-image" /> {/* Add image tag */}
              <p className="property-info">Location: {property.location}</p>
              <p className="property-info">Price: {property.price}</p>
              <p className="property-info">Bedrooms: {property.bedrooms}</p>
              <p className="property-info">Category: {property.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchProperty;

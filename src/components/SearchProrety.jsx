import React, { useState } from 'react';

const SearchProperty = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    name: '',
    location: '',
    price: '',
    bedrooms: '',
    category: ''
  });

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
      onSearch(properties);
    } catch (error) {
      console.error('Error searching for properties:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="name" value={searchParams.name} onChange={handleChange} />
      <input type="text" name="location" placeholder="location" value={searchParams.location} onChange={handleChange} />
      <input type="number" name="price" placeholder="budget" value={searchParams.price} onChange={handleChange} />
      <input type="number" name="bedrooms" placeholder="Bedrooms" value={searchParams.bedrooms} onChange={handleChange} />
      <input type="text" name="category" placeholder="category" value={searchParams.category} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchProperty;

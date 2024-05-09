
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

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <p className="mb-2">Broad -Walk Empire</p>
          <p>123 Street Name</p>
          <p>City, State, ZIP</p>
        </div>
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="mb-2">Contact Us:</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
      </div>
    </footer>
  );
}; 

export default Footer;

import { useEffect, useState } from 'react';
import Users from "../components/Users"
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import SearchProrety from '../components/SearchProrety';
import SearchButton from '../components/SearchButton';
import Filter from '../components/Filter';



function Home() {
  const [properties, setProperties] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/properties')
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

 
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

 
 const filteredProperties = properties.filter((property) =>
    property.name)
  ;
  return (
	    <NavBar/>
	    <Header/>
	  <Filter />
	    <SearchProrety lassName="p-3 flex justify-center"

				setSearchInput={setSearchInput}
				searchInput={searchInput}
			/>
			 <ul>
        {filteredProperties.map((property) => (
          <li key={property.id}>
            <h2>{property.name}</h2>
            <p>{property.description}</p>
          </li>
        ))}
      </ul>/>
	    <SearchButton />
	    <Users/>
	    <Footer/>
  )
}

export default Home;

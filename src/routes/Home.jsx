import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import PropertyDetails from './PropertyDetails';
import SearchBar from '../components/SearchButton';
import "../index.css"



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
    <main className='px-10'>
		<Navbar/>
    
	<SearchProperty className="p-3 flex justify-center"

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
      </ul>/
			<SearchBar/>
      <SeachButton/>  
    <PropertyDetails/>
	
 <Footer/>
    </main>
  )
}

export default Home;

import { useEffect, useState } from 'react';
import Users from "../components/Users"
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
// import SearchProperty from '../components/SearchProrety';
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




	// 	const filteredPlants = properties.filter((property) =>
	// 	properties.name.toLowerCase().includes(searchInput.toLowerCase())
	// );
  return (
    <main className='px-10'>
		<Navbar/>
    <Header/>
	<SearchPropety/>
			 
			<SearchBar/>
    <Users/>
	
 <Footer/>
    </main>
  )
}

export default Home;

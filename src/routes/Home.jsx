import { useEffect, useState } from 'react';
import Users from "../components/Users"
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import SearchProperty from '../components/SearchProrety';
import SearchBar from '../components/SearchButton';




function Home() {
    const [properties, setproperties] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		fetch('http://localhost:3000/properties', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => setproperties(data));
	}, []);


	// 	const filteredPlants = properties.filter((property) =>
	// 	properties.name.toLowerCase().includes(searchInput.toLowerCase())
	// );
  return (
    <main className='px-10'>
    <Header/>
    <NavBar/>
	<SearchProperty className="p-3 flex justify-center"

				setSearchInput={setSearchInput}
				searchInput={searchInput}
			/>
			<SearchBar/>
    <Users/>
 <Footer/>
    </main>
  )
}

export default Home;

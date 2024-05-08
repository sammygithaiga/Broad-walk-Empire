import { useEffect, useState } from 'react';
import Users from "../Users"
import Header from '../Header';
import Footer from '../Footer';
import NavBar from '../NavBar';
import SearchProperty from '../SearchProrety';



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
	<SearchProperty
				setSearchInput={setSearchInput}
				searchInput={searchInput}
			/>
    <Users/>
 <Footer/>
    </main>
  )
}

export default Home;

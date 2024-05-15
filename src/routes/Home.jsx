import Filter from '../components/Filter';
import PropertyDetails from './PropertyDetails';


const apiUrl = 'https://my-json-server.typicode.com/sammygithaiga/Broad-walk-Empire/property';

function Home() {

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(property => {
    // Process the retrieved user data
    console.log(property);
  })
  .catch(error => {
    console.error('Error:', error);
  });

	 return (
		<>
		<Filter />
		<PropertyDetails />
		</>
	
	
  )
}

export default Home;






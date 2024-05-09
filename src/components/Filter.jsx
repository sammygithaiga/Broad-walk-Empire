import { useEffect, useState } from "react"


function Filter({ addDetails }) {

    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState(0)
    const [bedrooms, setBedrooms] = useState(0)
    const [category, setCategory] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/properties`)
        .then(res => res.json())
        .then(data => console.log(data))
    })

    const handleSubmit = (e) => {
        e.preventDefault();
    

    if(!name && !location && !price && !bedrooms && !category) {
        alert('Please fill out all fields');
        return;
    }

    const newDetails = {
        name,
        location,
        price: parseFloat(price),
        bedroom,
        category,
      };

    addDetails(newDetails);
    // Clear form fields
    setName('');
    setLocation('');
    setPrice('');
    setBedrooms('');
    setCategory('')
      }
    };

  return (
    <form className="form" onSubmit={handleSubmit}>
        <label>
            Name:
        <input type="text" 
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        </label>

        <label>
           Location:
        <input type="text" 
        placeholder="location" 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />
        </label>

        <label>
            Price:
        <input type="text" 
        placeholder="Price" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />
        </label>
    
        <label>
            Bedrooms: 
        <input type="number" 
        placeholder="Bedrooms" 
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}/>
        </label>

        <label>
            Type:
        <input type="text" 
        placeholder="category" 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        />
        </label>

        <button className="bg-blue-400">Submit</button>
    </form>
 )


export default Filter;
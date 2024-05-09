import { useState } from "react"


function SearchBar() {

    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [price, setPrice] = useState('')
    const [bedroom, setBedroom] = useState(0)
    const [type, setType] = useState('')

  return (
    <main className="grid gap-x-8 gap-y-4 grid-cols-3">  
        <input type="text" 
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />

        <input type="text" 
        placeholder="State" 
        value={state}
        onChange={(e) => setState(e.target.value)}
        />

        <input type="text" 
        placeholder="Price" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />

        <input type="number" 
        placeholder="Bedeooms" 
        value={bedroom}
        onChange={(e) => setBedroom(e.target.value)}/>

        <input type="text" 
        placeholder="Type" 
        value={type}
        onChange={(e) => setType(e.target.value)}
        />
    </main>
  )
}

export default SearchBar;
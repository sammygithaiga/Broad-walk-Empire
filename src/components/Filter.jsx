
import { useEffect, useState } from "react"


function Filter() {
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
}

export default Filter;

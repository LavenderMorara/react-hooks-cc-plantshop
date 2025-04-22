import React,{useEffect, useState} from "react";

function Search({plants, setPlants, API}) {
  
  const [filtered, setFiltered] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setPlants(data)
        setFiltered(data) 
      })
},[API, setPlants])

  const handleOnchangeSearch =(e) => {
    setSearchTerm(e.target.value)

}

const handleSearchTerm =(e)=>{
  e.preventDefault()
  let filteredPlants = filtered.filter(plant => plant.name.toLowerCase().includes(searchTerm.toLowerCase()))
  setPlants(filteredPlants)
}

  return (
    <form 
    className="searchbar"
    onSubmit={handleSearchTerm}>
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleOnchangeSearch}
      />
    </form>
  );
}

export default Search;

import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import Search from "./Search";

function PlantList() {
  const API=" http://localhost:6001/plants"

  const[plants,setPlants]=useState([])

  useEffect(()=>{
    fetch(`${API}`)
    .then(r=>r.json())
    .then((d)=>{console.log(d)
      setPlants(d)
    })
  },[])

  const plantCards=plants.map((plant)=>(
    <ul className="cards"key={plant.id} id="cards">{<PlantCard name={plant.name} price={plant.price}  image={plant.image}/>}</ul>
  ))
  return (
    <>
    <Search plants={plants} setPlants={setPlants} API={API}/>
    {plantCards}
    </>
  );
}

export default PlantList;

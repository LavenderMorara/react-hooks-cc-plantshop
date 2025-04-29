import React from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

function PlantPage({ plants, setPlants, searchTerm, setSearchTerm }) {
  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;

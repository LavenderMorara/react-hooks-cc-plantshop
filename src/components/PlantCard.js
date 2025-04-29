import React, { useState } from 'react';

function PlantCard({ plant, onToggleStock }) {
  const [inStock, setInStock] = useState(true);

  const handleStockClick = () => {
    setInStock(!inStock);
    if (onToggleStock) onToggleStock(plant.id);
  };

  return (
    <li data-testid="plant-item" className= 'card'>
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button  
      className={inStock ? 'primary' : 'out-of-stock'}
      onClick={handleStockClick}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </button>
    </li>
  );
}

export default PlantCard;

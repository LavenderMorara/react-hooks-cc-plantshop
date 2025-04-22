import React,{useState} from "react";

function PlantCard({name, price, image}) {
  const [inStock, setInStock] = useState(true) // start as "In Stock"

  const toggleStock = () => {
    setInStock(prev => !prev)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button
        className={inStock ? "primary" : ""}
        onClick={toggleStock}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;

import React ,{useState}from "react";

function NewPlantForm() {
  const API=" http://localhost:6001/plants"

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: ''
  })

  const [submittedPlant, setSubmittedPlant] = useState(null)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(`${API}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...formData,
        price: parseFloat(formData.price)
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Plant posted:", data)
        setSubmittedPlant(data)
        setFormData({ name: "", image: "", price: "" }) // Reset form
      })
      .catch(err => console.error("Error posting plant:", err))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name"
        value={formData.name}
        onChange={handleChange} />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange} />
        <input 
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        value={formData.price}
        onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

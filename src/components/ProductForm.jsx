import { useState, useEffect } from "react";

function ProductForm() {
  const [userName, setUserName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `
      name: ${userName} 

      image: ${image} 

      Price: ${price} 
      
      Description: ${description}`
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <form className="post-form">
        <h1>Create Product Form</h1>
        <div className="input-container">
          <label>
            Name
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter name here"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Image Url
            <input
              id="image"
              name="image"
              type="text"
              placeholder="Enter image url here"
              value={image}
              onChange={(event) => {
                setImage(event.target.value);
              }}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Price
            <input
              id="price"
              name="price"
              type="number"
              placeholder="Enter price here"
              value={price}
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Description
            <textarea
              id="description"
              name="description"
              type="text"
              placeholder="Enter description here"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              rows={4}
              cols={30}
            />
          </label>
        </div>
        <div className="form-actions">
          <button type="submit" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </form>
  );
}

export default ProductForm;

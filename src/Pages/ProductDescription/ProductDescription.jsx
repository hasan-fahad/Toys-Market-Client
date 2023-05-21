import { useState } from 'react';

function ProductDescription() {
  const [description, setDescription] = useState('Product description');
  const [quantity, setQuantity] = useState(1);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform further actions like saving the data or making an API call.
    console.log('Description:', description);
    console.log('Quantity:', quantity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
}

export default ProductDescription;

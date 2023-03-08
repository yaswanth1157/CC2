import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
  const [No, setId] = useState("");
  const [Name, setName] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value); 
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2> NARI SUPERMARKET </h2>
          <h3> Stock management </h3>
          <img src="/kochi.jpg" />
          <label>No:</label>
          <br />
          <input
            type="text"
            value={No}
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />

          <label>Name:</label>
          <br />
          <input
            type="text"
            value={Name}
            required
            onChange={(e) => {
              handleNameChange(e);
            }}
          />
          <br />

          <label>Quantity:</label>
          <br />
          <input
            type="Quantity"
            value={Quantity}
            required
            onChange={(e) => {
              handleQuantityChange(e);
            }}
          />
          <br />

          <label>Price:</label>
          <br />
          <input
            type="price"
            value={price}
            required
            onChange={(e) => {
              handlePriceChange(e);
            }}
          />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
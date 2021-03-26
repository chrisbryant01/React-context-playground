import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  // eslint-disable-next-line
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();

    name && price
      ? // This is where we would use the updater function
        setMovies((prevMovies) => [
          ...prevMovies,
          {
            name: name,
            price: price,
            id: Math.random(),
          },
        ])
      : alert("Name and Price both are required.");
  };

  return (
    <form onSubmit={addMovie}>
      <h3 style={{ width: "100vw" }}>Add Movie</h3>
      <label>Name: {` `}</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={updateName}
        placeholder="Movie Name"
      />
      <label>Price: {` `}</label>
      <input
        type="number"
        name="price"
        value={price}
        onChange={updatePrice}
        placeholder="Price"
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;

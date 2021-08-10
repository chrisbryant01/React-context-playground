import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Ready Player One",
      price: "$9.99",
      id: 23124,
    },
    {
      name: "The Matrix",
      price: "$24.99",
      id: 25661256,
    },
    {
      name: "Inception",
      price: "$19.99",
      id: 23455679,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

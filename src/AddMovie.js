import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    // eslint-disable-next-line
    const [movies, setMovies] = useContext(MovieContext);

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = e => {
        e.preventDefault();
        // This is where we would use the updater function
        setMovies(prevMovies => [...prevMovies, {
            name: name,
            price: price,
            id: Math.random()
        }])
    }

    return (
        <form onSubmit={addMovie}>
            <h3 style={{width: '100%'}}>Add Movie</h3>
            <label>Name: {` `}</label>
            <input type="text" name="name" value={name} onChange={updateName} />
            <label>Price: {` `}</label>
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    );
};

export default AddMovie;

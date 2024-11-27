import React, { useState } from 'react';

const MoviesList = () => {
    // Initial state with hardcoded movies
    const [movies, setMovies] = useState([
        { id: 1, title: 'Inception', genre: 'Action', description: 'A mind-bending thriller by Christopher Nolan.' },
        { id: 2, title: 'The Godfather', genre: 'Drama', description: 'A classic mafia story.' },
        { id: 3, title: 'Toy Story', genre: 'Animation', description: 'A heartwarming tale of friendship.' },
        { id: 4, title: 'Mad Max: Fury Road', genre: 'Action', description: 'A high-octane post-apocalyptic adventure.' },
    ]);

    const [showActionOnly, setShowActionOnly] = useState(false);

    // Function to toggle description visibility for each movie
    const toggleDescription = (id) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === id ? { ...movie, showDescription: !movie.showDescription } : movie
            )
        );
    };

    // Function to remove a movie
    const removeMovie = (id) => {
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    };

    // Filter movies based on toggle state
    const displayedMovies = showActionOnly
        ? movies.filter((movie) => movie.genre === 'Action')
        : movies;

    return (
        <div>
            <h1>Favorite Movies</h1>
            <button onClick={() => setShowActionOnly((prev) => !prev)}>
                {showActionOnly ? 'Show All Movies' : 'Show Action Movies'}
            </button>
            <ul>
                {displayedMovies.map((movie) => (
                    <li key={movie.id}>
                        <span onClick={() => toggleDescription(movie.id)} style={{ cursor: 'pointer' }}>
                            {movie.title}
                        </span>
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>
                        {movie.showDescription && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;

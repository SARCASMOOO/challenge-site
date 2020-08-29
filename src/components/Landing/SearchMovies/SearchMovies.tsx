import React, { useState } from "react";

// Styles
import styles from './SearchMovies.module.css';

// Components
import Results from "./Results/Results";
import TextField from "./TextField/TextField";

// Model/Network
import MovieModel from "../../../models/Movie";
import Movies from "../../../axios/movies";


function useSearchMovies(): [MovieModel[], string | undefined, (search: string) => void] {
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);
    const networkLayer = new Movies();

    const searchMovie = (search: string) => {
        if (search.length === 0 || search === "") {
            setMovies([]);
        }

        networkLayer.getMoviesBySearch(search, 1)
        .then(movies => {
            setMovies(movies);
            setError(undefined);
        }).catch(error => {
            setError(error);
            setMovies([]);
        });
    }

    return [movies, error, searchMovie];
}


function SearchMovies() {
    const [movies, error, searchMovie] = useSearchMovies();

    const onSearchChange = (searchString: string) => searchMovie(searchString);

    return (
        <div className={styles.Container}>
            <div><h1>Shopify Award Show</h1></div>
            <div className={styles.SearchBar}>
                <TextField placeholder='Search' onChange={onSearchChange}/>
            </div>
            <div>
                {error ? 
                <div className={styles.Error}style={{color: "white"}}>{error}</div> 
                : <Results movies={movies} />}
            </div>
        </div>
    );
}

export default SearchMovies;

import React, { useState, useMemo, useEffect } from "react";

// Styles
import styles from './SearchMovies.module.css';

// Components
import Results from "./Results/Results";
import TextField from "./TextField/TextField";

// Model/Network
import MovieModel from "../../../models/MovieModel";
import OmdbRequests from "../../../requests/OmdbRequests";


function useSearchMovies(): [MovieModel[], string | undefined, (search: string) => void] {
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);
    const omdb = useMemo(() => new OmdbRequests(), []);

    const searchMovie = (search: string) => {
        if (search.length === 0 || search === '') {
            setMovies([]);
            setError(undefined);
            return;
        }

        omdb.getMoviesBySearch(search, 1)
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
    const [searchTerm, setSearchTerm] = useState('');
    const onSearchChange = (value: string) => setSearchTerm(value);

    useEffect(() => {
        const typingDelay = 300;
        
        const timer = setTimeout(() => {
            console.log(searchTerm);
            searchMovie(searchTerm);
        }, typingDelay);
    
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, [searchTerm]);
  

    return (
        <div className={styles.Container}>
            <div><h1>Shopify Award Show</h1></div>
            <div className={styles.SearchBar}>
                <TextField placeholder='Search' value={searchTerm} onChange={onSearchChange}/>
            </div>
            <div>
                {error ? 
                <div className={styles.Error} style={{color: "white"}}>{error}</div> 
                : <Results movies={movies} />}
            </div>
        </div>
    );
}

export default SearchMovies;

import React, { useState, useMemo, useEffect } from "react";

// Styles
import styles from './SearchMovies.module.css';

// Components
import Results from "./Results/Results";
import TextField from "./TextField/TextField";

// Model/Network
import MovieModel from "../../../models/MovieModel";
import OmdbRequests from "../../../requests/OmdbRequests";


function useSearchMovies(): [MovieModel[], boolean, string | undefined, (search: string) => void] {
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const omdb = useMemo(() => new OmdbRequests(), []);

    const searchMovie = (search: string) => {
        if (search.length === 0 || search === '') {
            setMovies([]);
            setError(undefined);
            setLoading(false);
            return;
        }

        setLoading(true);

        omdb.getMoviesBySearch(search, 1)
        .then(movies => {
            setMovies(movies);
            setError(undefined);
        }).catch(error => {
            setError(error);
            setMovies([]);
        }).finally(() => {
            setLoading(false);
        });
    }

    return [movies, loading, error, searchMovie];
}


function SearchMovies() {
    const [movies, loading, error, searchMovie] = useSearchMovies();
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
  

    let card: JSX.Element;
    if (error) {
        card = <div className={styles.Error} style={{color: "white"}}>{error}</div>;
    } else if (loading) {
        card = <div className={styles.Loader}></div>;
    } else {
        card = <Results movies={movies} />;
    }

    return (
        <div className={styles.Container}>
            <div><h1>Shopify Award Show</h1></div>
            <div className={styles.SearchBar}>
                <TextField placeholder='Search' value={searchTerm} onChange={onSearchChange}/>
            </div>
            <div>
                {card}
            </div>
        </div>
    );
}

export default SearchMovies;

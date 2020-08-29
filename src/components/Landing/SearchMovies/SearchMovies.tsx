import React from "react";

// Styles
import styles from './SearchMovies.module.css';

// Components
import Results from "./Results/Results";

// Model
import useMovies from "../../../CustomHooks/useMovies";
import TextField from "./TextField/TextField";

const SearchMovies = (_: {}) => {
    const [movies, error, searchMovie] = useMovies();

    const onSearchChange = (searchString: string) => searchMovie(searchString);

    return (
        <div className={styles.Container}>
            <div><h1>Shopify Award Show</h1></div>
            <div className={styles.SearchBar}><TextField onChange={onSearchChange}/></div>
            <div>
                {error ? 
                <div className={styles.Error}style={{color: "white"}}>{error}</div> 
                : <Results movies={movies} />}
            </div>
        </div>
    );
}
export default SearchMovies;

import React from "react";

import styles from './Results.module.css';

import MovieModel from "../../../../models/MovieModel";
import SearchMovieCard from "./SearchMovieCard/SearchMovieCard";


function Results({movies}: {movies: MovieModel[]}) {
    const movieList = movies.map(movie => <SearchMovieCard key={movie.imdbID} movie={movie}/>);

    return (
        <div className={styles.Results}>
            <div className={styles.GridRow}>
                {movieList}
            </div>
        </div>
    );
}

export default Results;

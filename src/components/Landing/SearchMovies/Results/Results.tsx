import React from "react";

import styles from './Results.module.css';

import MovieModel from "../../../../models/Movie";
import SearchMovieCard from "./SearchMovieCard/SearchMovieCard";


function Results({movies}: {movies: MovieModel[]}) {
    const movieList = movies.map(movie => <SearchMovieCard key={movie.imdbID} movie={movie}/>);

    return (
        <div className={styles.Results}>
            {movieList}
        </div>
    );
}

export default Results;

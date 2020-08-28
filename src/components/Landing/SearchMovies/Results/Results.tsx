import React from "react";

import styles from './Results.module.css';

import MovieModel from "../../../../models/Movie";
import Movie from "./Movie/Movie";


const Results = ({movies}: {movies: MovieModel[]}) => {
    const movieList = movies.map(movie => <Movie key={movie.imdbID} movie={movie}/>);

    return (
        <div className={styles.Results}>
            {movieList}
        </div>);
}

export default Results;

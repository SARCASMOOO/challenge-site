import React from "react";
import MovieModel from "../../../../models/Movie";
import styles from './Results.module.css';
import {Container} from "@material-ui/core";
import Movie from "./Movie/Movie";

interface Props {
    movies: MovieModel[];
    saveMovieAsNomination: (id: string) => void;
    removeMovieFromNomination: (id: string) => void;
    nominatedMovies: string[];
}

const Results = ({movies, saveMovieAsNomination, removeMovieFromNomination, nominatedMovies}: Props) => {
    return (
        <div className={styles.Results}>
            {movies.map((movie) => <Movie movieData={movie} key={movie.imdbID}
                                          nominatedMovies={nominatedMovies}
                                          saveMovieAsNomination={saveMovieAsNomination}
                                          removeMovieFromNomination={removeMovieFromNomination}/>)}
        </div>);
}

export default Results;

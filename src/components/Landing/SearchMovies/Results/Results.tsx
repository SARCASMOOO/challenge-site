import React from "react";
import MovieModel from "../../../../models/Movie";
import styles from './Results.module.css';
import {Container} from "@material-ui/core";
import Movie from "./Movie/Movie";

interface Props {
    movies: MovieModel[];
    saveMovieAsNomination: (id: string) => void;
    removeMovieFromNomination: (id: string) => void;
}

const Results = ({movies, saveMovieAsNomination, removeMovieFromNomination}: Props) => (
    <Container className={styles.Results}>
        {movies.map((movie) => <Movie movieData={movie} key={movie.imdbID}
                                      saveMovieAsNomination={saveMovieAsNomination}
                                      removeMovieFromNomination={removeMovieFromNomination}/>)}
    </Container>
);

export default Results;

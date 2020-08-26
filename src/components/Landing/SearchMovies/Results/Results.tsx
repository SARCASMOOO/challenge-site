import React from "react";
import MovieModel from "../../../../models/Movie";
import styles from './Results.module.css';
import {Container} from "@material-ui/core";
import Movie from "./Movie/Movie";

interface Props {
    movies: MovieModel[];
}

const Results = ({movies}: Props) => (
    <Container className={styles.Results}>
        {movies.map((movie) => <Movie {...movie} key={movie.imdbID}/>)}
    </Container>
);

export default Results;

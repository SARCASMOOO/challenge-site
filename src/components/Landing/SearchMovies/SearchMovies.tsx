import React, {useState} from "react";
import styles from './SearchMovies.module.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchBar from "./SearchBar/SearchBar";
import Movies from '../../../axios/movies';
import MovieModel from '../../../models/Movie';
import Results from "./Results/Results";

interface Props {
    movieState: {movies: MovieModel[], page: number};
    error: string | undefined;
    searchMovie: (search: string) => void;
    removeMovieFromNomination: (id: string) => void;
    saveMovieAsNomination: (id: string) => void;
}

const SearchMovies = ({movieState, error, searchMovie, saveMovieAsNomination, removeMovieFromNomination}: Props) => {
    const onSearchChange = (searchString: string) => searchMovie(searchString);

    return (
        <Container className={styles.SearchMovies}>
            <Typography variant='h3' component='h3' className={styles.Title} align='center'>
                Shopify Award Show
            </Typography>
            <SearchBar onChange={onSearchChange}/>
            <Results movies={movieState.movies}
                     saveMovieAsNomination={saveMovieAsNomination}
                     removeMovieFromNomination={removeMovieFromNomination}/>
        </Container>
    );
}
export default SearchMovies;

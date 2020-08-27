import React, {useState} from "react";
import styles from './SearchMovies.module.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchBar from "./SearchBar/SearchBar";
import MovieModel from '../../../models/Movie';
import Results from "./Results/Results";


interface Props {
    movies: MovieModel[];
    page: number;
    error: string;
    searchMovie: (search: string) => void;
}

const SearchMovies = ({movies, page, error, searchMovie}: Props) => {
    const onSearchChange = (searchString: string) => searchMovie(searchString);

    return (
        <Container className={styles.SearchMovies}>
            <Typography variant='h3' component='h3' className={styles.Title} align='center'>
                Shopify Award Show
            </Typography>
            <SearchBar onChange={onSearchChange}/>
            <Results movies={movies}/>
        </Container>
    );
}
export default SearchMovies;

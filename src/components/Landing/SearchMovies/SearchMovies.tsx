import React from "react";

// Styles
import styles from './SearchMovies.module.css';
import Typography from '@material-ui/core/Typography';

// Components
import Container from '@material-ui/core/Container';
import SearchBar from "./SearchBar/SearchBar";
import Results from "./Results/Results";

// Model
import useMovies from "../../../CustomHooks/useMovies";

const SearchMovies = (_: {}) => {
    const [movies, error, searchMovie] = useMovies();

    const onSearchChange = (searchString: string) => searchMovie(searchString);

    return (
        <Container className={styles.SearchMovies}>
            <Typography variant='h3' component='h3' className={styles.Title} align='center'>
                Shopify Award Show
            </Typography>
            <SearchBar onChange={onSearchChange}/>
            <Results movies={movies} />
        </Container>
    );
}
export default SearchMovies;

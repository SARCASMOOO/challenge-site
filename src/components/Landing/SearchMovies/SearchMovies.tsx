import React from "react";

// Styles
import styles from './SearchMovies.module.css';
import Typography from '@material-ui/core/Typography';

// Components
import Container from '@material-ui/core/Container';
import Results from "./Results/Results";

// Model
import useMovies from "../../../CustomHooks/useMovies";
import TextField from "./TextField/TextField";

const SearchMovies = (_: {}) => {
    const [movies, error, searchMovie] = useMovies();

    const onSearchChange = (searchString: string) => searchMovie(searchString);

    return (
        <Container className={styles.SearchMovies}>
            <Typography variant='h3' component='h3' className={styles.Title} align='center'>
                Shopify Award Show
            </Typography>
            <TextField onChange={onSearchChange}/>
            {error ? <div style={{color: "white"}}>{error}</div> : <Results movies={movies} />}
        </Container>
    );
}
export default SearchMovies;

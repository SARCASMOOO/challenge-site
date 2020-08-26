import React from "react";
import styles from './SearchMovies.module.css';
import Container  from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchBar from "./SearchBar/SearchBar";

interface Props {}

const SearchMovies = ({}: Props) => (
    <Container className={styles.SearchMovies}>
        <Typography variant='h3' component='h3' className={styles.Title} align='center'>Shopify Award Show</Typography>
        <SearchBar/>
        <h1>Results</h1>
    </Container>
);

export default SearchMovies;

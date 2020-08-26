import React from "react";
import styles from './SearchMovies.module.css';
import Container  from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

interface Props {
}

const SearchMovies = ({}: Props) => (
    <Container>
        <Typography variant='h3' component='h3' className={styles.Title} align='center'>Shopify Award Show</Typography>
        <h1>Search</h1>
        <h1>Results</h1>
    </Container>
);

export default SearchMovies;

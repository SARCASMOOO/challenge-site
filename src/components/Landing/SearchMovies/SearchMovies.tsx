import React, {useState} from "react";
import styles from './SearchMovies.module.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchBar from "./SearchBar/SearchBar";
import Movies from '../../../axios/movies';
import MovieModel from '../../../models/Movie';
import Results from "./Results/Results";

interface Props {}

interface State {
    movies: MovieModel[];
    page: number;
}

const movie = new Movies();

const SearchMovies = ({}: Props) => {
    const [state, setState] = useState<State>({movies: [], page: 1});

    const onSearchChange = (searchString: string) => {
        movie.getMoviesBySearch(searchString, 1).then((response) => {
            if(response && response.data && response.data.Search) {
                const newMovies: MovieModel[] = response.data.Search;
                setState( ({page}: State)  => {
                    return ({page: page, movies: newMovies});
                });
            }
        }).catch(() => {
            console.log('Unable to grab movies.');
        });
    }

    return (
        <Container className={styles.SearchMovies}>
            <Typography variant='h3' component='h3' className={styles.Title} align='center'>
                Shopify Award Show
            </Typography>
            <SearchBar onChange={onSearchChange}/>
            <Results movies={state.movies}/>
        </Container>
    );
}
export default SearchMovies;

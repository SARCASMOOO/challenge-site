import React, {useState} from "react";
import styles from './SearchMovies.module.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchBar from "./SearchBar/SearchBar";
import Movies from '../../../axios/movies';
import MovieModel from '../../../models/Movie';
import Results from "./Results/Results";


interface State {
    movies: MovieModel[];
    page: number;
}

function useMovies():  [State, string|undefined, (search: string) => void] {
    const [state, setState] = useState<State>({movies: [], page: 1});
    const [error, setError] = useState<string | undefined>(undefined);

    const searchMovie = (search: string) => {
        const movie = new Movies();
        movie.getMoviesBySearch(search, 1).then((response) => {
            if(response && response.data && response.data.Search) {
                const newMovies: MovieModel[] = response.data.Search;
                setState( ({page}: State)  => ({page: page, movies: newMovies}));
            }
        }).catch(error => {
            console.log(`${error}`);
            setError('Unable to grab movies.');
        });
    }

    return [state, error, searchMovie];
}

const SearchMovies = (props: {}) => {
    const [state, error, searchMovie] = useMovies();

    const onSearchChange = (searchString: string) => searchMovie(searchString);

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

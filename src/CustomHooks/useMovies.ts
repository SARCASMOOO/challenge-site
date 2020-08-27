import {useState} from "react";
import Movies from "../axios/movies";
import MovieModel from "../models/Movie";

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

export default useMovies;
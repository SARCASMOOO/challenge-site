import {useState} from "react";
import Movies from "../axios/movies";
import MovieModel from "../models/Movie";

interface State {
    movies: MovieModel[];
    page: number;
    nominatedMovies: string[];
}

function useMovies():  [State, string | undefined, (search: string) => void, (id: string) => void, (id: string) => void] {
    const [state, setState] = useState<State>({movies: [], page: 1, nominatedMovies: []});
    const [error, setError] = useState<string | undefined>(undefined);

    const searchMovie = (search: string) => {
        const movie = new Movies();
        movie.getMoviesBySearch(search, 1).then((response) => {
            if(response && response.data && response.data.Search) {
                const newMovies: MovieModel[] = response.data.Search;
                setState( ({page, nominatedMovies}: State)  => ({
                    page: page,
                    movies: newMovies,
                    nominatedMovies: nominatedMovies
                }));
            }
        }).catch(error => {
            console.log(`${error}`);
            setError('Unable to grab movies.');
        });
    }

    const saveMovieAsNomination = (id: string) => {
        if(state.nominatedMovies.includes(id)) return;
        const newNominatedMovies = [...state.nominatedMovies];

        newNominatedMovies.push(id);

        setState( ({page, movies}: State)  => ({
            page: page,
            movies: movies,
            nominatedMovies: newNominatedMovies
        }));
    }

    const removeMovieFromNomination = (id: string) => {
        if(!state.nominatedMovies.includes(id)) return;

        let newNominatedMovies = [...state.nominatedMovies];

        newNominatedMovies = newNominatedMovies.filter((nominationId) => (nominationId !== id));

        setState( ({page, movies}: State)  => ({
            page: page,
            movies: movies,
            nominatedMovies: newNominatedMovies
        }));
    }

    return [state, error, searchMovie, saveMovieAsNomination, removeMovieFromNomination];
}

export default useMovies;
import {useState} from "react";

import Movies from "../axios/movies";
import MovieModel from "../models/Movie";


function useMovies(): [MovieModel[], string | undefined, (search: string) => void] {
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);

    const searchMovie = (search: string) => {
        if (search.length === 0 || search === "") {
            setMovies([]);
        }

        const networkLayer = new Movies();
        networkLayer.getMoviesBySearch(search, 1)
        .then(movies => {
            setMovies(movies);
            setError(undefined);
        }).catch(error => {
            setError(error);
            setMovies([]);
        });
    }

    return [movies, error, searchMovie];
}

export default useMovies;
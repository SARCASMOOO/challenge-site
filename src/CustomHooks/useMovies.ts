import {useState} from "react";

import Movies from "../axios/movies";
import MovieModel from "../models/Movie";


function useMovies(): [MovieModel[], string | undefined, (search: string) => void] {
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);

    const searchMovie = (search: string) => {
        const movie = new Movies();
        movie.getMoviesBySearch(search, 1).then((response) => {
            if(response && response.data && response.data.Search) {
                const newMovies: MovieModel[] = response.data.Search;
                setMovies(newMovies);
            }
        }).catch(error => {
            console.log(`${error}`);
            setError('Unable to grab movies.');
        });
    }

    return [movies, error, searchMovie];
}

export default useMovies;
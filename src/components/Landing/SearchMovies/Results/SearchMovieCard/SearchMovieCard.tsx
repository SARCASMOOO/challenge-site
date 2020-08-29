import React, { useContext } from "react";

// Model
import MovieModel from "../../../../../models/Movie";
import { NominatedContext } from "../../../../../global_state/nominatedMoviesGlobal";

// Common component
import MovieCard from "../../../MovieCard/MovieCard";


function truncateMovieTitle(title: string) {
    const truncateSize = 18;
    return (title.length > truncateSize) ? title.substring(0, truncateSize) + "..." : title;
}

function useNominateMovie(movie_id: string): [boolean, (movie: MovieModel) => void] {
    const [nominatedMovies, setNominatedMovie] = useContext(NominatedContext);

    const movieFromNomination = nominatedMovies.findIndex(nomMovie => nomMovie.imdbID === movie_id);
    const isNominated = movieFromNomination !== -1;

    const nominate = (movie: MovieModel) => {
        if (isNominated) return; // already nominated

        setNominatedMovie(nominatedMovies => [...nominatedMovies, movie]);
    }

    return [isNominated, nominate];
}


function SearchMovieCard({movie}: {movie: MovieModel}) {
    const [isNominated, nominate] = useNominateMovie(movie.imdbID)
    const onClick = () => nominate(movie);

    const cardImage = (movie.Poster === 'N/A') ? undefined : movie.Poster;
    const title = truncateMovieTitle(movie.Title);

    return (
        <MovieCard movie={{title: title, imageSrc: cardImage, year: movie.Year}} 
            actionName='Nominate' 
            onClick={onClick} 
            isNominated={isNominated} />
    );
}

export default SearchMovieCard;
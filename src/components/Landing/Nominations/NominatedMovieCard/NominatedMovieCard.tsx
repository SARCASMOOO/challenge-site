import React, { useContext } from 'react';

// State/Models
import MovieModel from "../../../../models/Movie";
import { NominatedContext } from '../../../../global_state/nominatedMoviesGlobal';

// Styles
import MovieCard from '../../MovieCard/MovieCard';


function useRemoveNomination() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setNominatedMovies] = useContext(NominatedContext);
    
    const removeNomination = (movie_id: string) => {
        setNominatedMovies(nominatedMov => {
            return [...nominatedMov].filter(movie => movie.imdbID !== movie_id);
        });
    };

    return removeNomination;
}

function truncateMovieTitle(title: string) {
    const truncateSize = 22;
    return (title.length > truncateSize) ? title.substring(0, truncateSize - 3) + "..." : title;
}

function NominatedMovieCard({movie}: {movie: MovieModel}) {
    const removeNomination = useRemoveNomination();
   
    const onClick = () => removeNomination(movie.imdbID);
    const cardImage = (movie.Poster === 'N/A') ? undefined : movie.Poster;
    const title = truncateMovieTitle(movie.Title);

    return (
        <MovieCard movie={{title: title, imageSrc: cardImage, year: movie.Year}} 
            actionName='Remove' 
            onClick={onClick} />
    );
}


export default NominatedMovieCard;
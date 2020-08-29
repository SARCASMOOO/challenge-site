import React, { useContext } from 'react';

// State/Models
import MovieModel from "../../../../models/Movie";
import { NominatedContext } from '../../../../global_state/nominatedMoviesGlobal';

// Styles
import MovieCard from '../../MovieCard/MovieCard';


function useRemoveNomination() {
    const [_, setNominatedMovies] = useContext(NominatedContext);
    
    const removeNomination = (movie_id: string) => {
        setNominatedMovies(nominatedMov => {
            const nomMovieCopy = [...nominatedMov];
            const movieToRemove = nomMovieCopy.findIndex(mov => mov.imdbID === movie_id);
            
            if (movieToRemove !== -1) nomMovieCopy.splice(movieToRemove, 1);

            return nomMovieCopy;
        });
    };

    return removeNomination;
}

function truncateMovieTitle(title: string) {
    return (title.length > 14) ? title.substring(0, 16) + "..." : title;
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
import React, { useContext, useMemo } from 'react';

// Style
import styles from './NominatedMovieCard.module.css';

// State/Models
import MovieModel, { truncateMovieTitle } from "../../../../models/MovieModel";
import { NominatedContext } from '../../../../global_state/nominatedMoviesGlobal';

// Common
import MovieCard from '../../MovieCard/MovieCard';
import CacheManager from '../../../../global_state/cacheManager';


function useRemoveNomination() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setNominatedMovies] = useContext(NominatedContext);
    const cache = useMemo(() => new CacheManager(), []);
    
    const removeNomination = (movie_id: string) => {
        setNominatedMovies(nominated => [...nominated].filter(movie => movie.imdbID !== movie_id));
        cache.removeNominatedMovie(movie_id);
    };

    return removeNomination;
}

function NominatedMovieCard({movie}: {movie: MovieModel}) {
    const removeNomination = useRemoveNomination();
   
    const onClick = () => removeNomination(movie.imdbID);
    const cardImage = (movie.Poster === 'N/A') ? undefined : movie.Poster;
    const title = truncateMovieTitle(movie.Title);

    return (
        <MovieCard movie={{title: title, imageSrc: cardImage, year: movie.Year}} 
            actionName='Remove' 
            className={styles.MovieCard}
            onClick={onClick} />
    );
}


export default NominatedMovieCard;
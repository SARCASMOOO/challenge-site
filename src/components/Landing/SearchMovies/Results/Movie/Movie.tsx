import React, { useContext } from "react";

// Styles
import styles from './Movie.module.css';
import { Button } from '@material-ui/core';

// Model
import MovieModel from "../../../../../models/Movie";
import { NominatedContext } from "../../../../../global_state/nominatedMoviesGlobal";

// UI
import defaultImage from '../../../../../assets/images/blank_image.png';


function truncateMovieTitle(title: string) {
    const truncateSize = 18;
    return (title.length > truncateSize) ? title.substring(0, truncateSize) + "..." : title;
}

function useNominated(movie_id: string): [boolean, (movie: MovieModel) => void] {
    const [nominatedMovies, setNominatedMovie] = useContext(NominatedContext);

    const movieFromNomination = nominatedMovies.findIndex(nomMovie => nomMovie.imdbID === movie_id);
    const isNominated = movieFromNomination !== -1;

    const nominate = (movie: MovieModel) => {
        if (isNominated) return; // already nominated

        setNominatedMovie(nominatedMovies => [...nominatedMovies, movie]);
    }

    return [isNominated, nominate];
}

const Movie = ({movie}: {movie: MovieModel}) => {
    const [isNominated, nominate] = useNominated(movie.imdbID);
    const cardImage = (movie.Poster === 'N/A') ? defaultImage : movie.Poster;
    const title = truncateMovieTitle(movie.Title);

    return (
    <div className={styles.Movie}>
        <div className={styles.Image} style={{ backgroundImage: `url(${cardImage})`}}>
        </div>
        <div className={styles.Info}>
            <div className={styles.Title}>
                <h2>{title}</h2>
            </div>
            <div className={styles.Year}>
                {movie.Year}
            </div>
            <div>
                <Button disabled={isNominated} size="small" color="primary" onClick={() => nominate(movie)}>
                    Nominate
                </Button>
            </div>
        </div>
    </div>);
}

export default Movie;
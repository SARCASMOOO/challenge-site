import React, { useContext } from "react";

// Styles
import styles from './Movie.module.css';

// Model
import MovieModel from "../../../../../models/Movie";
import { NominatedContext } from "../../../../../global_state/nominatedMoviesGlobal";

// UI
import placeholderImage from '../../../../../assets/images/placeholder.svg';


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

function Button({children, disabled = false, onClick}: React.PropsWithChildren<{disabled?: boolean, onClick?: () => void}>) {
    const handleClick = () => {
        if (disabled) return;

        onClick?.();
    };

    const disabledStyle = disabled ? styles.Disabled : styles.Enabled;

    return ( 
        <div onClick={handleClick} className={`${styles.Button} ${disabledStyle}`}>
            {children}
        </div>
    );
}

const Movie = ({movie}: {movie: MovieModel}) => {
    const [isNominated, nominate] = useNominated(movie.imdbID)
    const onClick = () => nominate(movie);

    const cardImage = (movie.Poster === 'N/A') ? placeholderImage : movie.Poster;
    const title = truncateMovieTitle(movie.Title);

    const placeholder = (movie.Poster === 'N/A') ? styles.PlaceholderImage : undefined;

    return (
    <div className={styles.Movie}>
        <div className={`${styles.Image} ${placeholder}`} style={{ backgroundImage: `url(${cardImage})`}}>
        </div>
        <div className={styles.Info}>
            <div className={styles.Title}>
                <h2>{title}</h2>
            </div>
            <div className={styles.Year}>
                {movie.Year}
            </div>
            <div>
                <Button disabled={isNominated} onClick={onClick}>
                    Nominate
                </Button>
            </div>
        </div>
    </div>);
}

export default Movie;
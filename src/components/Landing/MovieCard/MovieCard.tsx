import React, {useContext} from "react";

import styles from './MovieCard.module.css';
import trophy from '../../../assets/images/trophy.svg';
import placeholderImage from '../../../assets/images/placeholder.svg';
import { NominatedContext } from '../../../global_state/nominatedMoviesGlobal';
import Button from "../Button/Button";

type Movie = {
    title: string,
    imageSrc?: string,
    year: string,
}

interface Props {   
    movie: Movie;
    actionName: 'Nominate' | 'Remove';
    isNominated?: boolean;
    className?: string;
    onClick?: () => void;
}

function MovieCard({ movie, actionName, isNominated = false, className, onClick }: Props) {

    const [nominatedMovies, _] = useContext(NominatedContext);
    const cardImage = movie.imageSrc ?? placeholderImage;
    const imageStyle = movie.imageSrc ? undefined : styles.PlaceholderImage;
    const isNominatedStyle = isNominated ? styles.Nominated : undefined;
    const isNominationFull = nominatedMovies.length > 4 && actionName !== 'Remove';
    
    return (
        <div className={className}>
            <div className={styles.Movie}>
                <div className={`${styles.Image} ${imageStyle}`}
                    style={{ backgroundImage: `url(${cardImage})` }}>
                </div>
                <div className={styles.Info}>
                    <div className={styles.Title}>
                        <h2>{movie.title}</h2>
                    </div>
                    <div className={styles.Year}>
                        {movie.year}
                    </div>
                    <div className={styles.Button}>
                        <Button disabled={isNominated || isNominationFull} onClick={onClick}>
                            {actionName}
                        </Button>
                    </div>
                    {isNominated ?
                        <div className={styles.Trophy}>
                            <img src={trophy} alt="trophy" />
                        </div>
                        : null}
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
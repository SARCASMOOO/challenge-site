import React, {useContext} from 'react';

// UI
import styles from './Nominations.module.css';

// Model/State
import { NominatedContext } from '../../../global_state/nominatedMoviesGlobal';
import NominatedMovieCard from './NominatedMovieCard/NominatedMovieCard';


function Nominations() {
    const [nominatedMovies] = useContext(NominatedContext);

    return (
        <div className={styles.Nominations}>
            <div className={styles.Header}><h2>Nominations</h2></div>
            {nominatedMovies.map(movie => <NominatedMovieCard key={movie.imdbID} movie={movie}/>)}
        </div>
    );
}

export default Nominations;
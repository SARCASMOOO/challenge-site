import React, {useContext} from 'react';

// UI
import styles from './Nominations.module.css';

// Model/State
import { NominatedContext } from '../../../global_state/nominatedMoviesGlobal';
import NominatedMovieCard from './SidePaneltems/SidePanelItems';


function Nominations() {
    const [nominatedMovies] = useContext(NominatedContext);

    const nominatedMoviesList = nominatedMovies.map(movie => <NominatedMovieCard
        key={movie.imdbID} movie={movie}/>);

    return (
        <div className={styles.Nominations}>
            {nominatedMoviesList}
        </div>
    );
}

export default Nominations;
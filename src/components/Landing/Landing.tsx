import React from "react";

// Styles
import styles from './Landing.module.css';

// Components
import SearchMovies from "./SearchMovies/SearchMovies";
import Nominations from "./Nominations/Nominations";

// Provider
import { NominatedProvider } from "../../global_state/nominatedMoviesGlobal";

const Landing = (props: {}) => {
    return (
        <div className={styles.Container}>
            <div className={styles.Left}><SearchMovies /></div>
            <div className={styles.Right}><Nominations /></div>
        </div>
    )
}

export default NominatedProvider(Landing);

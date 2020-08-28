import React from "react";

// Styles
import styles from './Landing.module.css';

// Components
import SearchMovies from "./SearchMovies/SearchMovies";
import SidePanel from "./SidePanel/SidePanel";

// Hooks
import { movieProvider } from "../../global_state/moviesGlobal";

const Landing = (props: {}) => {
    return (
        <main className={styles.Main}>
            <SearchMovies />
            {/*<SidePanel removeMovieFromNomination={removeMovieFromNomination} nominatedMovies={state.nominatedMovies} movies={state.movies}/>*/}
        </main>
    )
}

export default movieProvider(Landing);

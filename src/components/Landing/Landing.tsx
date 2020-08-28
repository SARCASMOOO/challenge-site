import React from "react";

// Styles
import styles from './Landing.module.css';

// Components
import SearchMovies from "./SearchMovies/SearchMovies";
import SidePanel from "./SidePanel/SidePanel";

// Hooks
import useMovies from "../../CustomHooks/useMovies";

const Landing = (props: {}) => {
    const [state, error, searchMovie, saveMovieAsNomination, removeMovieFromNomination] = useMovies();

    return (
        <main className={styles.Main}>
            <SearchMovies movieState={state} error={error} searchMovie={searchMovie}
                          saveMovieAsNomination={saveMovieAsNomination}
                          removeMovieFromNomination={removeMovieFromNomination}/>
            <SidePanel removeMovieFromNomination={removeMovieFromNomination} nominatedMovies={state.nominatedMovies} movies={state.movies}/>
        </main>
    )
}

export default Landing;

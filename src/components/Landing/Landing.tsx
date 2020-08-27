import React from "react";

// Components
import SearchMovies from "./SearchMovies/SearchMovies";

// Styles
import styles from './Landing.module.css';
import SidePanel from "./SidePanel/SidePanel";
import useMovies from "../../CustomHooks/useMovies";
import MovieModel from "../../models/Movie";

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

import React from "react";

// Styles
import styles from './Landing.module.css';

// Components
import SearchMovies from "./SearchMovies/SearchMovies";
import SidePanel from "./SidePanel/SidePanel";

// Provider
import { NominatedProvider } from "../../global_state/nominatedMoviesGlobal";

const Landing = (props: {}) => {
    return (
        <main className={styles.Main}>
            <SearchMovies />
            <SidePanel />
        </main>
    )
}

export default NominatedProvider(Landing);

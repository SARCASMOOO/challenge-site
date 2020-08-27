import React from "react";

// Components
import SearchMovies from "./SearchMovies/SearchMovies";

// Styles
import styles from './Landing.module.css';
import SidePanel from "./SidePanel/SidePanel";

const Landing = (props: {}) => (
    <main className={styles.Main}>
        <SearchMovies/>
        <SidePanel movies={[]}/>
    </main>
);

export default Landing;

import React from "react";

// Components
import SearchMovies from "./SearchMovies/SearchMovies";

// Styles
import styles from './Landing.module.css';

interface Props {}

const Landing = ({}: Props) => (
    <main className={styles.Main}>
        <SearchMovies/>
        <div>list area</div>
    </main>
);

export default Landing;

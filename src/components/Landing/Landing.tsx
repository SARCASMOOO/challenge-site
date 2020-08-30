import React, { useState } from "react";

// Styles
import styles from './Landing.module.css';

// SVGs
import hamburger from '../../assets/images/hamburger.svg';

// Components
import SearchMovies from "./SearchMovies/SearchMovies";
import Nominations from "./Nominations/Nominations";

// Provider
import { NominatedProvider } from "../../global_state/nominatedMoviesGlobal";

function Landing() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSideDrawer = () => setIsOpen(prevIsOpen => !prevIsOpen);

    const isOpenClass = isOpen ? styles.SideDrawerOpen : styles.SideDrawerClosed;

    return (
        <>
        <div className={styles.Container}>
            <div className={styles.Left}>
                <SearchMovies />
                <div className={styles.Hamburger}>
                    <img src={hamburger} alt='Hamburger icon' onClick={toggleSideDrawer}/>
                </div>
            </div>
            <div className={`${styles.Right} ${isOpenClass}`}><Nominations /></div>
        </div>
        <div className={`${styles.Absolute} ${isOpenClass}`}><Nominations /></div>
        </>
    );
}

export default NominatedProvider(Landing);

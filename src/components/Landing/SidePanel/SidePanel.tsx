import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './SidePanel.module.css';
import SidePanelItems from './SidePaneltems/SidePanelItems';

import MovieModel from "../../../models/Movie";

interface Props {
    movies: MovieModel[];
    nominatedMovies: string[];
    removeMovieFromNomination: (id: string) => void;
}

const SidePanel = ({movies, nominatedMovies, removeMovieFromNomination}: Props) => {

    const [value, setValue] = useState(2);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Paper square className={styles.SidePanel}>
            <Tabs
                value={value}
                variant='fullWidth'
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label={`Nominations (${nominatedMovies.length})`} />
                <Tab label="Favourites" />
            </Tabs>
            <SidePanelItems removeMovieFromNomination={removeMovieFromNomination} movies={movies} nominatedMovies={nominatedMovies}/>
        </Paper>
    );
}

export default SidePanel;
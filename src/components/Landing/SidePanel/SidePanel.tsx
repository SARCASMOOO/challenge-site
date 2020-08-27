import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './SidePanel.module.css';

import MovieModel from "../../../models/Movie";

interface Props {
    movies: MovieModel[];
}

const SidePanel = ({movies}: Props) => {

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
                <Tab label="Nominations" />
                <Tab label="Favourites" />
            </Tabs>
        </Paper>
    );
}

export default SidePanel;
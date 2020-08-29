import React, {useState, useContext} from 'react';

// UI
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './SidePanel.module.css';

// Components
import SidePanelItems from './SidePaneltems/SidePanelItems';

// Model/State
import { NominatedContext } from '../../../global_state/nominatedMoviesGlobal';

const SidePanel = (_: {}) => {
    const [nominatedMovies, setNominatedMovies] = useContext(NominatedContext);

    const [value, setValue] = useState('nominations');
    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
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
                <Tab label={`Nominations (${nominatedMovies.length})`} value='nominations'/>
                <Tab label="Favourites" value='favourites'/>
            </Tabs>
            <SidePanelItems/>
        </Paper>
    );
}

export default SidePanel;
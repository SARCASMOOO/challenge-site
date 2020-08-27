import React from "react";
import styles from './SidePanel.module.css';
import {Paper, Tabs, Tab, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";


const MovieList = (<div>
    <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
            <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Drafts" />
        </ListItem>
    </List>
</div>);

const SidePanel = () => (
    <Paper square
           className={styles.SidePanel}>
        <Tabs
            variant='fullWidth'
            value={''}
        >
            <Tab label="Nominations" />
            <Tab label="Favourites"/>
        </Tabs>
        {MovieList}
    </Paper>);

export default SidePanel;
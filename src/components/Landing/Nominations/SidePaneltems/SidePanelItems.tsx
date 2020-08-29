import React, { useContext } from 'react';

// UI
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import defaultImage from '../../../../assets/images/placeholder.svg';


// State/Models
import MovieModel from "../../../../models/Movie";
import { NominatedContext } from '../../../../global_state/nominatedMoviesGlobal';

// Styles
import styles from './SidePanelItems.module.css';

function useNomination(): [MovieModel[], (movie_id: string) => void] {
    const [nominatedMovies, setNominatedMovies] = useContext(NominatedContext);
    
    const removeNomination = (movie_id: string) => {
        setNominatedMovies(nominatedMov => {
            const nomMovieCopy = [...nominatedMov];
            const movieToRemove = nomMovieCopy.findIndex(mov => mov.imdbID === movie_id);
            
            if (movieToRemove !== -1) nomMovieCopy.splice(movieToRemove, 1);

            return nomMovieCopy;
        });
    };

    return [nominatedMovies, removeNomination];
}

function truncateMovieTitle(title: string) {
    return (title.length > 14) ? title.substring(0, 16) + "..." : title;
}

function NominatedMovieCard({movie, onRemove}: {movie:MovieModel, onRemove: () => void}) {
    const cardImage = (movie.Poster === 'N/A') ? defaultImage : movie.Poster;
    const title = truncateMovieTitle(movie.Title);
    return ( 
    <ListItem divider>
        <Card style={{width: '280px', height: '400px'}}>
            <CardMedia
                style={{height: '250px'}}
                component='img'
                src={cardImage}
                title={title} 
                className={styles['MuiCardMedia-img']}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {movie.Year}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={onRemove}>
                    Remove
                </Button>
            </CardActions>
        </Card>
    </ListItem>);
}

const SidePanelItems = (_: {}) => {
    const [nominatedMovies, removeNomination] = useNomination();

    const nominatedMoviesList = nominatedMovies.map(movie => <NominatedMovieCard key={movie.imdbID} movie={movie} onRemove={() => removeNomination(movie.imdbID)}/>);

    return (<div>{nominatedMoviesList}</div>);
}

export default SidePanelItems;
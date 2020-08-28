import React, { useContext } from 'react';

// UI
import {Button, Card, CardActions, CardContent, CardMedia, ListItemText, Typography} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';

// State/Models
import MovieModel from "../../../../models/Movie";
import { NominatedContext } from '../../../../global_state/nominatedMoviesGlobal';

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


function NominatedMovieCard({movie, onRemove}: {movie:MovieModel, onRemove: () => void}) {
    return ( 
    <ListItem divider>
        <Card>
            <CardMedia
                style={{height: '250px'}}
                component='img'
                src={movie.Poster}
                title={movie.Title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                    {movie.Title}
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
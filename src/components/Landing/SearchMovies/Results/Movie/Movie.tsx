import React from "react";
import MovieModel from "../../../../../models/Movie";
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';
import styles from './Movie.module.css';

interface Props {
    movieData: MovieModel;
    saveMovieAsNomination: (id: string) => void;
    removeMovieFromNomination: (id: string) => void;
    nominatedMovies: string[];
}
//saveMovieAsNomination, removeMovieFromNomination
// Poster, Title, Year, imdbID

const Movie = ({movieData, saveMovieAsNomination, removeMovieFromNomination, nominatedMovies}: Props) => {
    const isDisabled = nominatedMovies.includes(movieData.imdbID);
    let classes = styles.Movie;
    if(isDisabled) {
        classes += ' ' + styles.Disabled;
    }
    return (<Card className={classes}>
        <CardMedia
            style={{height: '250px'}}
            component='img'
            src={movieData.Poster}
            title={movieData.Title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h5">
                {(movieData.Title.length > 18) ? `${movieData.Title.substring(0, 20)}...` : movieData.Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {movieData.Year}
            </Typography>
        </CardContent>
        <CardActions>
            <Button disabled={isDisabled} size="small" color="primary" onClick={() => {saveMovieAsNomination(movieData.imdbID)}}>
                Nominate
            </Button>
        </CardActions>
    </Card>);
}

export default Movie;
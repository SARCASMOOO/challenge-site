import React from "react";

// Styles
import styles from './Movie.module.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';

// Model
import MovieModel from "../../../../../models/Movie";


function truncateMovieTitle(title: string) {
    return (title.length > 18) ? title.substring(0, 20) + "..." : title;
}

const Movie = ({movie}: {movie: MovieModel}) => {
    const isDisabled = false; // TODO
    
    const title = truncateMovieTitle(movie.Title);

    return (<Card>
        <CardMedia
            style={{height: '250px'}}
            component='img'
            src={movie.Poster}
            title={movie.Title}
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
            <Button disabled={isDisabled} size="small" color="primary" >
                Nominate
            </Button>
        </CardActions>
    </Card>);
}

export default Movie;
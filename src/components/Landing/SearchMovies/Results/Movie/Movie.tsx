import React from "react";
import MovieModel from "../../../../../models/Movie";
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';
import styles from './Movie.module.css';

const Movie = ({Poster, Title, Year, imdbID}: MovieModel) => {
    console.log(Poster, Title, Year, imdbID);

    return (
        <Card className={styles.Movie}>
            <CardMedia
                style={{height: '250px'}}
                component='img'
                src={Poster}
                title={Title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h5">
                    {Title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {Year}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Nominate
                </Button>
            </CardActions>
        </Card>);
}

export default Movie;
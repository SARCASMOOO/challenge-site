import React from "react";
import MovieModel from "../../../../../models/Movie";
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';
import styles from './Movie.module.css';

const Movie = ({Poster, Title, Year, imdbID}: MovieModel) => (console.log(Poster, Title, Year, imdbID),
    <Card className={styles.Movie}>
        <CardActionArea>
            <CardMedia
                style={{height: '250px'}}
                component='img'
                src={Poster}
                title={Title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {Year}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {imdbID}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Nominate
            </Button>
        </CardActions>
    </Card>);

export default Movie;
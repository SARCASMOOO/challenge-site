import React, { useContext } from "react";

// Styles
import styles from './Movie.module.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button } from '@material-ui/core';

// Model
import MovieModel from "../../../../../models/Movie";
import { NominatedContext } from "../../../../../global_state/nominatedMoviesGlobal";

function truncateMovieTitle(title: string) {
    return (title.length > 18) ? title.substring(0, 20) + "..." : title;
}

function useNominated(movie_id: string): [boolean, (movie: MovieModel) => void] {
    const [nominatedMovies, setNominatedMovie] = useContext(NominatedContext);

    const movieFromNomination = nominatedMovies.findIndex(nomMovie => nomMovie.imdbID === movie_id);
    const isNominated = movieFromNomination !== -1;

    const nominate = (movie: MovieModel) => {
        if (isNominated) return; // already nominated

        setNominatedMovie(nominatedMovies => [...nominatedMovies, movie]);
    }

    return [isNominated, nominate];
}

const Movie = ({movie}: {movie: MovieModel}) => {
    const [isNominated, nominate] = useNominated(movie.imdbID);

    const title = truncateMovieTitle(movie.Title);

    return (<Card className={styles.Movie}>
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
            <Button disabled={isNominated} size="small" color="primary" onClick={() => nominate(movie)}>
                Nominate
            </Button>
        </CardActions>
    </Card>);
}

export default Movie;
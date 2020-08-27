import React from 'react';
import MovieModel from "../../../../models/Movie";
import ListItem from '@material-ui/core/ListItem';
import {Button, Card, CardActions, CardContent, CardMedia, ListItemText, Typography} from '@material-ui/core';

interface Props {
    movies: MovieModel[];
    nominatedMovies: string[];
    removeMovieFromNomination: (id: string) => void;
}

const SidePanelItems = ({movies, nominatedMovies, removeMovieFromNomination}: Props) => {
    const result: React.ReactNode[] = [];
    movies.map((movie) => {
        const isNominated = nominatedMovies.includes(movie.imdbID);
        if (isNominated) {
            result.push(
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
                            <Button size="small" color="primary" onClick={() => {removeMovieFromNomination(movie.imdbID);}}>
                                Remove
                            </Button>
                        </CardActions>
                    </Card>);
                </ListItem>
            );
        }
    })

    return <div>{result}</div>;
}

export default SidePanelItems;
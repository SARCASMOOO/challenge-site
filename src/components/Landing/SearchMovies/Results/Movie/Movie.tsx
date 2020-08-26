import React from "react";
import MovieModel from "../../../../../models/Movie";

const Movie = ({poster, title, year, imdbID}: MovieModel) => {
    console.log('here');
    return (<h1>Movie</h1>);
}

export default Movie;

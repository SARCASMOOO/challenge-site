import React from "react";
import MovieModel from "../../../../models/Movie";

interface Props {
    movies: MovieModel[];
}

const Results = ({movies}: Props) => {
    console.log('movies: ', movies);
    return (<h1>Results</h1>);
}

export default Results;
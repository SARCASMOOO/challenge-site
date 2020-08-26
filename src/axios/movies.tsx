import axios from './axios-movies';
import React from "react";

class Movies {
    private imdbURL = 'http://www.omdbapi.com/?i=tt3896198';

    getMovies(query: String) {
        console.log('test');
        return (<h1>Tst</h1>);
    }
}

export default Movies;
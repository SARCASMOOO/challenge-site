import axios from './axios-movies';
import React from "react";
require('dotenv').config();

class Movies {
    private imdbURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + process.env['REACT_APP_OM_DB_API_KEY'];

    getMovies(query: String) {
        console.log(this.imdbURL);
        return (<h1>s</h1>);
    }
}

export default Movies;
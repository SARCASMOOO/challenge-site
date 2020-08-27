import axios from './axios-movies';
import React from "react";

require('dotenv').config();

interface MovieQuery {
    s: string;
    type: string;
    y: string;
    page: string;
}

class Movies {
    private imdbURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + process.env['REACT_APP_OM_DB_API_KEY'];

    getMoviesBySearch(search: String, page: number) {
        console.log(this.imdbURL);
        const queryString = '&type=movie&page=' + page + '&s=' + search;
        return axios.get((this.imdbURL + queryString));
    }
}

export default Movies;
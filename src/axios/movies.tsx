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
    private API_KEY = process.env['REACT_APP_OM_DB_API_KEY'];
    private imdbURL = `http://www.omdbapi.com/?i=tt3896198&apikey=${this.API_KEY}`;

    getMoviesBySearch(search: String, page: number) {
        console.log(this.imdbURL);
        const queryString = `${this.imdbURL}&type=movie&page=${page}&s=${search}`;
        return axios.get(queryString);
    }
}

export default Movies;
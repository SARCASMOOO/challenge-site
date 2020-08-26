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
        axios.get((this.imdbURL + queryString)).then((response) => {
                console.log('Movies are: ', response.data.Search);
            }
        );
        return (<h1>s</h1>);
    }
}

export default Movies;
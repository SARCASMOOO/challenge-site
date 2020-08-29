import axios from './axios-movies';
import MovieModel from '../models/Movie';

require('dotenv').config();

interface MovieQuery {
    s: string;
    type: string;
    y: string;
    page: string;
}

class Movies {
    private imdbURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + process.env['REACT_APP_OM_DB_API_KEY'];

    async getMoviesBySearch(search: String, page: number) {
        const queryString = `&type=movie&page=${page}&s=${search}`;
        
        const response = await axios.get(this.imdbURL + queryString);

        if(response && response.data) {
            if (response.data.Search) return response.data.Search as MovieModel[];

            if (response.data.Error) {
                return Promise.reject(response.data.Error);
            }
        }

        return Promise.reject("Problem was found with the response");
    }
}

export default Movies;
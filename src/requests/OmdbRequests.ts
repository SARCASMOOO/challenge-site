import axios from 'axios';
import MovieModel from '../models/MovieModel';

const functions = require('firebase-functions');
let config = require('../env.json');

class OmdbRequests {
    private imdbURL = 'https://www.omdbapi.com/?i=tt3896198&apikey=';

    private url = (query: string) => `${this.imdbURL}${this.API_KEY()}${query}`;

    private API_KEY() {
        if(Object.keys(functions.config()).length) {
            config = functions.config();
        }
        return config.service.react_app_om_db_api_key;
    }

    public async getMoviesBySearch(search: String, page: number) {
        const queryString = `&type=movie&page=${page}&s=${search}`;
        
        const response = await axios.get(this.url(queryString));

        if(response && response.data) {
            if (response.data.Search) return response.data.Search as MovieModel[];

            if (response.data.Error) {
                return Promise.reject(response.data.Error);
            }
        }

        return Promise.reject("Problem was found with the response");
    }
}

export default OmdbRequests;
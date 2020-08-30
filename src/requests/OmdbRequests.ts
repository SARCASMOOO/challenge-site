import axios from 'axios';
import MovieModel from '../models/MovieModel';

require('dotenv').config();

class OmdbRequests {
    private imdbURL = 'http://www.omdbapi.com/?i=tt3896198&apikey=';
    private API_KEY = process.env['REACT_APP_OM_DB_API_KEY'];

    private url = (query: string) => `${this.imdbURL}${this.API_KEY}${query}`;

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
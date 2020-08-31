import axios from 'axios';
import MovieModel from '../models/MovieModel';

let config = require('../env.json');

class OmdbRequests {
    private imdbURL = 'https://www.omdbapi.com/?i=tt3896198&apikey=';

    private url = (query: string) => `${this.imdbURL}e79e7cb7${query}`;

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
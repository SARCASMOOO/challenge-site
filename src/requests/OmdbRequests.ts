import axios from 'axios';
import MovieModel from '../models/MovieModel';

class OmdbRequests {
    private API_KEY = 'e79e7cb7';
    private imdbURL = `https://www.omdbapi.com/?i=tt3896198&apikey=${this.API_KEY}`;

    private url = (query: string) => `${this.imdbURL}${query}`;

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
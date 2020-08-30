import MovieModel from "../models/MovieModel";

class CacheManager {
    private NOMINATED_MOVIES_KEY = 'NOMINATED_MOVIES';

    public saveNominatedMovie(movie: MovieModel) {
        const nominatedMovies = this.getNominatedMovies();
        nominatedMovies.push(movie);

        this.store(nominatedMovies);
    }

    public removeNominatedMovie(movie_id: string) {
        const nominatedMovies = this.getNominatedMovies();
        const newMovies = nominatedMovies.filter(nominated => nominated.imdbID !== movie_id);

        this.store(newMovies);
    }

    public getNominatedMovies() {
        const json_movies = localStorage.getItem(this.NOMINATED_MOVIES_KEY);
        
        if (!json_movies) return [];
        
        return JSON.parse(json_movies) as MovieModel[];
    }

    private store<T>(value: T) {
        localStorage.setItem(this.NOMINATED_MOVIES_KEY, JSON.stringify(value));
    }
}

export default CacheManager;
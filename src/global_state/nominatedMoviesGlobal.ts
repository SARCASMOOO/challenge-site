import createGlobalState from "./createGlobalState";
import MovieModel from "../models/MovieModel";
import CacheManager from "./cacheManager";

const cache = new CacheManager();
const nominatedMoviesCache = cache.getNominatedMovies();

// Global store for the nominated movies
const [NominatedContext, NominatedProvider] = createGlobalState<MovieModel[]>(nominatedMoviesCache);

export {NominatedContext, NominatedProvider};
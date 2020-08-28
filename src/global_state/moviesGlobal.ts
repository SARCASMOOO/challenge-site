import createGlobalState from "./genericGlobal";
import MovieModel from "../models/Movie";


const [moviesContext, movieProvider] = createGlobalState<MovieModel[]>([]);

export {moviesContext, movieProvider};
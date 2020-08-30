import createGlobalState from "./createGlobalState";
import MovieModel from "../models/MovieModel";

// Global store for the nominated movies
const [NominatedContext, NominatedProvider] = createGlobalState<MovieModel[]>([]);

export {NominatedContext, NominatedProvider};
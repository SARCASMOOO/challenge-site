import createGlobalState from "./createGlobalState";
import MovieModel from "../models/Movie";

// Global store for the nominated movies
const [NominatedContext, NominatedProvider] = createGlobalState<MovieModel[]>([]);

export {NominatedContext, NominatedProvider};
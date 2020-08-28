import * as React from 'react';
import MovieModel from '../models/Movie';

// This is done because Typescript detects [A, B] as a two element array instead of a tuple

type ReactDispatcher<T> = React.Dispatch<React.SetStateAction<T>>;
type StateAndDispatcher = [MovieModel[], ReactDispatcher<MovieModel[]>];
type Pair = [React.Context<StateAndDispatcher>, <P extends {}>(Component: React.ComponentType<P>) => (props: P) => JSX.Element];

function createGlobalMovieState(): Pair {
    const defaultValue: StateAndDispatcher = [[], (val) => {} ]; // safe guard
    const MoviesContext = React.createContext<StateAndDispatcher>(defaultValue);

    const Provider = <P extends {}>(Component: React.ComponentType<P>) => (props: P) => {
        const [movies, setMovies] = React.useState<MovieModel[]>([]);
        
        return (
            <MoviesContext.Provider value={[movies, setMovies]}>
                <Component {...props} />
            </MoviesContext.Provider>
        );
    };

    return [MoviesContext, Provider];
}


const [MoviesContext, Provider] = createGlobalMovieState();

export {MoviesContext, Provider};
//// Root component

const Root = () => {
    // 
    return (<h1>Hello</h1>);
};

export default Provider(Root);


// Inner component

const Inner = () => {
    const [movies, setMovies] = React.useContext(MoviesContext); // Global
    //const [_movies, _setMovies] = React.useState<MovieModel[]>([]); // Local
    
    return (<h1>Hello</h1>);
};

/// Side component
const Side = () => {
    const [movies, setMovies] = React.useContext(MoviesContext); // Global
    //const [_movies, _setMovies] = React.useState<MovieModel[]>([]); // Local
    
    return (<h1>Hello</h1>);
};
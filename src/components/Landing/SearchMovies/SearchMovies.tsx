import React, { useState, useMemo, useEffect, useContext } from "react";

// Styles
import styles from './SearchMovies.module.css';

// SVGs
import clear from '../../../assets/images/clear.svg';

// Components
import Results from "./Results/Results";
import TextField from "./TextField/TextField";

// Model/Network
import MovieModel from "../../../models/MovieModel";
import OmdbRequests from "../../../requests/OmdbRequests";

// Context
import { NominatedContext } from '../../../global_state/nominatedMoviesGlobal';

const Msg = () => (<h3 style={{
    position: 'fixed',
    border: '1px solid white',
    borderRadius: '25px',
    top: '20px', left: '20%', width: '40%', backgroundColor: '#171717', 
    color: 'white', height: '40px', textAlign: 'center', paddingTop: '7px',
    zIndex: 9999
}}>You have 5 nominations</h3>);


function useSearchMovies(): [MovieModel[], boolean, string | undefined, (search: string) => void] {
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const omdb = useMemo(() => new OmdbRequests(), []);

    const searchMovie = (search: string) => {
        if (search.length === 0 || search === '') {
            setMovies([]);
            setError(undefined);
            setLoading(false);
            return;
        }

        setLoading(true);

        omdb.getMoviesBySearch(search, 1)
        .then(movies => {
            setMovies(movies);
            setError(undefined);
        }).catch(error => {
            setError(error);
            setMovies([]);
        }).finally(() => {
            setLoading(false);
        });
    }

    return [movies, loading, error, searchMovie];
}

function SearchMovies() {
    const [movies, loading, error, searchMovie] = useSearchMovies();
    const [searchTerm, setSearchTerm] = useState('');
    const onSearchChange = (value: string) => setSearchTerm(value);
    const [nominatedMovies, ] = useContext(NominatedContext);

    useEffect(() => {
        const typingDelay = 300;
        
        const timer = setTimeout(() => {
            searchMovie(searchTerm);
        }, typingDelay);
    
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, [searchTerm]);

    const clearSearch = () => setSearchTerm('');

    let card: JSX.Element;
    if (error) {
        card = <div className={styles.Error} style={{color: "white"}}>{error}</div>;
    } else if (loading) {
        card = <div className={styles.Loader}></div>;
    } else {
        card = <Results movies={movies} />;
    }

    return (
        <div className={styles.Container}>
            <div>
                {(nominatedMovies.length > 4) ? (<Msg/>) : undefined}
                <h1>Shopify Award Show</h1>
                </div>
            <div className={styles.SearchBar}>
                <TextField placeholder='Search' value={searchTerm} onChange={onSearchChange}/>
                <img className={styles.Clear} src={clear} alt='Clear text' onClick={clearSearch}/>
            </div>
            <div>
                {card}
            </div>
        </div>
    );
}

export default SearchMovies;

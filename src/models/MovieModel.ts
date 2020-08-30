interface MovieModel {
    Poster: string;
    Title: string
    Year: string
    imdbID: string;
}

export function truncateMovieTitle(title: string) {
    const truncateSize = 21;
    return (title.length > truncateSize) ? title.substring(0, truncateSize - 3) + "..." : title;
}

export default MovieModel;
/**
* Componente que muestra una lista de películas.
 * @param {Object[]} movies 
 * @param {Function} onSelectMovie
 */

export const MovieList = ({ movies, onSelectMovie }) => {
    return (
        <ul className="list list-movies">
            {movies?.map((movie) => (
                <Movie 
                movie={movie} 
                key={movie.imdbID}
                onSelectMovie={onSelectMovie}
                />
            ))}
        </ul>
    );
};


/**
* Componente que muestra los detalles básicos de una película.
* @param {Object} movie 
 * @param {Function} onSelectMovie
 */

export const Movie = ({ movie, onSelectMovie}) => {
    return (
        <li onClick={() => onSelectMovie(movie.imdbID)}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    );
};


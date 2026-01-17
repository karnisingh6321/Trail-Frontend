import MovieCard from "./MovieCard.jsx";


function MovieGrid({movies}){
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {movies.map((elem) => (
                <MovieCard movie={elem}/>
            ))}

        </div>
    )
}

export default MovieGrid;
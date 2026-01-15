import MovieCard from "./MovieCard.jsx";
import {trendingMovies} from "../data/TrendingMovies.js";

function MovieGrid(){
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {trendingMovies.map((elem) => (
                <MovieCard movie={elem}/>
            ))}

        </div>
    )
}

export default MovieGrid;
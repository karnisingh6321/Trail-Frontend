


const MovieCard = ({movie}) => {
    return (
        <div className='group cursor-pointer '>
            <div className='aspect-[2/3] overflow-hidden rounded-lg  '>
                <img src={movie.poster} alt={movie.title} className=' h-full w-full group-hover:scale-110 overflow-hidden transition-transform duration-300 ease-out ' />
            </div>

            <div className='mt-2 font-medium text-white flex flex-col '>
                {movie.title}
                <span className='text-gray-500'>{movie.year}</span>
            </div>
        </div>
    )
}

export default MovieCard
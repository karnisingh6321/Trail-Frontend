


const MovieCard = ({movie}) => {
    return (
        <div className='group cursor-pointer '>
            <div className='aspect-[2/3] overflow-hidden rounded-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] '>
                <img src={movie.poster} alt={movie.title} className=' h-full w-full  ' />
            </div>

            <div className='mt-2 font-medium text-white flex flex-col '>
                {movie.title}
                <span className='text-gray-500'>{movie.year}</span>
            </div>
        </div>
    )
}

export default MovieCard
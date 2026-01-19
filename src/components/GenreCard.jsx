



const GenreCard = ({ genre }) => {
    return (
        <div className='relative cursor-pointer min-w-[250px] px-24 py-20 rounded-lg bg-[#1b1e23] text-white text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-1'
             style={{backgroundImage: `url(${genre.image})`,backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(95%)'}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/98 via-black/25 to-transparent" />
            <span className='absolute bottom-4 left-4 text-2xl'>{genre.name}</span>
        </div>
    )
}

export default GenreCard;
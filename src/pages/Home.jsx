import MovieGrid from "../components/MovieGrid.jsx";

function Home(){
    return (
        <div className='relative  bg-black pt-20'>
            <div className='absolute inset-0 bg-cover bg-center h-[460px] overflow-hidden' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/kfXgo2rMF1A19celCwLyQ4Xwpf8.jpg)`, filter: 'contrast(1.1) brightness(0.90)' }} >
                <div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none' />
            </div>
        <div className='relative z-10 px-55 py-5  '>
            <h2 className='text-xl text-white font-semibold mb-7 mt-15' >Globally Trending</h2>
            <MovieGrid />
        </div>
        </div>
    )
}
export default Home
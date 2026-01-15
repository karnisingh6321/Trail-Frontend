import MovieGrid from "../components/MovieGrid.jsx";

function Home(){
    return (
        <div className='px-50 py-5 bg-black '>
            <h2 className='text-xl text-white font-semibold mb-7 mt-15 '>Globally Trending</h2>
            <MovieGrid />
        </div>
    )
}
export default Home
import GenreCard from './GenreCard';
import {genres} from "../data/genres.js";

const GenreRow = () => {
    return (
        <div className='relative flex gap-2 overflow-x-auto  pt-1 pb-5 scrollbar-hide'>
            {genres.map((genre) => (
                <GenreCard key={genre.id} genre={genre} />
            ))}
        </div>
    )
}

export default GenreRow;

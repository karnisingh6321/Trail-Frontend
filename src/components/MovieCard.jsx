import { useEffect, useRef, useState } from "react";


const MovieCard = ({movie}) => {

    const titleRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const checkOverflow = () => {
            const el = titleRef.current;
            if (el) {
                setIsOverflowing(el.scrollWidth > el.clientWidth);
            }
        };

        checkOverflow();
        window.addEventListener("resize", checkOverflow);

        return () => window.removeEventListener("resize", checkOverflow);
    }, []);

    return (
        <div className='group cursor-pointer hover:bg-white/5 hover:-translate-y-1 transition-transform duration-300 ease-out hover:rounded-lg p-3'>
            <div className='aspect-[2/3] overflow-hidden rounded-lg  '>
                <img src={movie.poster} alt={movie.title} className=' h-full w-full group-hover:scale-110 overflow-hidden transition-transform duration-300 ease-out ' />
            </div>

            <div className='mt-2 overflow-hidden font-medium text-white flex flex-col '>
                <div ref={titleRef} className={`whitespace-nowrap text-base transition-transform  will-change-transform ease-linear ${isOverflowing ? "group-hover:-translate-x-[45%] duration-[6000ms]" : ""}`}>{movie.title}</div>
                <span className='text-gray-500'>{movie.year}</span>
            </div>
        </div>
    )
}

export default MovieCard
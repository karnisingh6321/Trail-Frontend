import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";


const ProfileDropdown = () => {

    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e){
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside); };
    }, []);


    return (
        <div className="relative" ref={wrapperRef}>
            <button className='flex items-center justify-center text-white cursor-pointer gap-1' onClick={() => setOpen(!open)}>
                <span className="leading-none">Profile</span>
                <ChevronDown size={18} className='block'/>
            </button>

            {open && (
                <div className='absolute  left-1/2 -translate-x-1/2 mt-3 w-25 bg-[#272c37] rounded-lg shadow-lg font-light text-sm'>
                    <div className="px-4 py-2 text-gray-300  hover:bg-white/10 cursor-pointer">
                        Home
                    </div>
                    <div className="px-4 py-2 text-gray-300  hover:bg-white/10 cursor-pointer">
                        Profile
                    </div>
                    <div className="px-4 py-2 text-gray-300 hover:bg-white/10 cursor-pointer">
                        Films
                    </div>
                    <div className="px-4 py-2 text-gray-300 hover:bg-white/10 cursor-pointer">
                        Likes
                    </div>
                    <div className="px-4 py-2 text-gray-300  hover:bg-white/10 cursor-pointer">
                        Watchlist
                    </div>
                    <div className="px-4 py-2 text-gray-300  hover:bg-white/10 cursor-pointer">
                        Settings
                    </div>
                    <div className="px-4 py-2 text-gray-300 hover:bg-white/10 cursor-pointer">
                        Logout
                    </div>
                </div>

            )}
        </div>

    )
}

export default ProfileDropdown
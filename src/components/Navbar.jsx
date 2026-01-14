import { Plus, Bell, Search } from 'lucide-react';
import ProfileDropdown from "./ProfileDropdown.jsx";





function Navbar() {
    return (

        <div className='w-full flex justify-between p-4 py-5 px-14 bg-[#16181c] text-white'>
            <h2 className='items-center flex'>Trail</h2>
            <div className='flex gap-9  font-medium items-center'>
                <ProfileDropdown/>
                <div className='relative flex '>
                <input className='w-full py-2 px-3 pl-3 pr-8 rounded-lg bg-[#272c37] flex items-center focus:outline-none' placeholder='Search' type='text'  />
                <button className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer'><Search className='block'/></button>
                </div>
                <button className='cursor-pointer text-white text-1xl bg-blue-600 hover:bg-blue-700 h-10 px-4 rounded-lg flex items-center justify-center gap-1 '><Plus className='' strokeWidth={3} size={18}/><span className=''>LOG</span></button>
                <button className='cursor-pointer text-white hover:text-gray-400 transition'><Bell /></button>
            </div>
        </div>

    )
}

export default Navbar
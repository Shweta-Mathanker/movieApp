import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
 
  return (
    <div className='w-[20%] h-screen border-r-2 border-zinc-400 p-10'>
      <h1 className='text-2xl text-white font-bold'>
      <i className=" text-[#6556CD] ri-tv-fill mr-2 "></i>
        <span className=' '>Movie-App</span>
        </h1>
   <nav className='flex flex-col text-zinc-400 text-xl gap-3 '>
   <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
  <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'><i className="ri-fire-fill"></i> Trending</Link>
  <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'><i className="mr-1 ri-bard-fill"></i> Popular</Link>
  <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'><i className="mr-1 ri-movie-2-fill"></i> Movies</Link>
  <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'><i className=" mr-1 ri-tv-2-fill"></i> Tv Shows</Link>
  <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'><i className=" mr-1 ri-team-fill"></i> Peoples</Link>

   </nav>
 <hr className='border-none h-[1px] mt-1 bg-zinc-400' />
   <nav className='flex flex-col text-zinc-400 text-xl gap-3 '>
   <h1 className='text-white font-semibold text-xl mt-6 mb-5'>Website Information</h1>
  <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'><i className=" mr-1 ri-information-fill"></i> About M-A</Link>
  <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3'><i className="mr-1 ri-phone-fill"></i> Contact Us</Link>

   </nav>
    </div>
  )
}

export default SideNav
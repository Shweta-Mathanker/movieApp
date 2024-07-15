import React from 'react'
import { Link } from 'react-router-dom';

const Cards = ({data,title}) => {
  return (
    <div className='flex flex-wrap w-full  h-full pl-[5%] p-[4%] bg-[#1F1E24] '>
        {data.map((c,i)=>
        <Link className='relative w-[25vh] mr-[5%] mb-[1%] mt-1 ml-5' key={i}>
        <img className=' shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${
                c.backdrop_path || c.poster_path ||c.profile_path
              }`} alt="" />
       <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'>
       {c.name || 
        c.title || 
        c.original_name ||
         c.original_title}
       </h1>
{c.vote_average &&(
  <div className='absolute right-[-10%] bottom-[25%] rounded-full text-white font-xl font-semibold w-[6vh] h-[6vh] flex  justify-center items-center bg-yellow-600'>
  {(c.vote_average *10.).toFixed()}<sup>%</sup>
  </div>
)}

 </Link>)}
    </div>
  )
};

export default Cards
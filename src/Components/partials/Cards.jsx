import React from 'react'
import { Link } from 'react-router-dom';

const Cards = ({data,title}) => {
  return (
    <div className='flex flex-wrap w-full ml-16 '>
        {data.map((c,i)=>
        <Link className='w-[25vh] mr-[6%] mb-[1%] mt-8' key={i}>
        <img className=' shadow-[8pc_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${
                c.backdrop_path || c.poster_path
              }`} alt="" />
       <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'>
       {c.name || 
        c.title || 
        c.original_name ||
         c.original_title}
       </h1>
        </Link>)}
    </div>
  )
};

export default Cards
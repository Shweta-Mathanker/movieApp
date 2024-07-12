import React from "react";


const HorizontalCards = ({data}) => {
  return (
    

      <div className="w-[100%] flex  overflow-y-hidden mb-5 p-5  ">
   {data.map((d,i)=> <div key={i} className="min-w-[20%] mr-5 mb-5   bg-zinc-900">
    <img className="w-full h-[45%] object-cover" src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`} alt="" />
  <div className=" text-white p-3">
  <h1 className='text-xl font-semibold'>{d.name || d.title || d.original_name || d.original_title}</h1>
      <p className='pt-2'>{d.overview.slice(0,50)}...<span className='text-blue-400'>more</span></p>
   
  </div>
   </div>)}
      </div>
   
  );
};

export default HorizontalCards;

import React, { useEffect, useState } from 'react'
import SideNav from './partials/SideNav'
import TopNav from './partials/TopNav'
import axios from '../Utils/axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import DropDown from './partials/DropDown';
import Loading from './Loading';

const Home = () => {
    document.title="Movie-App || homepage";
    const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all")
    const GetHeaderWallpaper= async () => {
      try {
        const { data } = await axios.get(`/trending/all/day`);
       let randomdata=
        data.results[(Math.random()*data.results.length).toFixed()];
        setwallpaper(randomdata);

      } catch (error) {
        console.log("ERROR: ", error);
      }
    };

    const GetTrending= async () => {
      try {
        const { data } = await axios.get(`/trending/${category}/day`);
        settrending(data.results);

      } catch (error) {
        console.log("ERROR: ", error);
      }
    };


  // console.log(wallpaper);
    useEffect(()=>{
      GetTrending();
   !wallpaper && GetHeaderWallpaper();
    },[category]);


  
    return wallpaper && trending ?(
      <>
  <SideNav/>
    <div className='w-[80%] h-full overflow-auto overflow-x-hidden'>
        <TopNav/>
        <Header data={wallpaper}/>

        <div className="p-5 flex justify-between ">
        <h1 className=" text-3xl font-semibold text-zinc-400">Trending</h1>
      <DropDown title="Filter" options={["tv" , "movie" ,"all"]} func={(e)=>setcategory(e.target.value)} />
      </div>
        <HorizontalCards data={trending} />
    </div>
    </>
    ): <Loading/>
   
}

export default Home
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TopNav from "../Components/partials/TopNav";
import DropDown from './partials/DropDown';
import axios from '../Utils/axios';
import Cards from './partials/Cards';
import Loading from "./Loading";
const Trending = () => {
   
  const navigate= useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);

  
  const GetTrending= async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      settrending(data.results);

    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(()=>{
    GetTrending();
  },[category,duration])
  return trending?(
    <div className='px-[3%] w-screen h-screen overflow-hidden overflow-y-auto'>
        <div className= ' w-full  flex items-center justify-between '>
        
           <h1 className=' text-2xl font-semibold text-zinc-400'>
            <i onClick={()=> navigate(-1)} className=" hover:text-[#6556CD] ri-arrow-left-line"></i> {" "} 
            Trending
            </h1>
        <div className='flex items-center w-[80%]'>
        <TopNav/>
        <DropDown title="Category" options={["movie","tv","all"]}
         func={(e)=>setcategory(e.target.value)} />
       <div className='w-[2%]'></div>
        <DropDown title="Duration" options={["week","day"]}
         func={(e)=>setduration(e.target.value)} />

        </div>

        </div>
<Cards data={trending} title={category}/>
      
    </div>
  ):<Loading/> ;
};

export default Trending
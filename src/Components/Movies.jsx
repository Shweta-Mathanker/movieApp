import axios from "../Utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";

const Movies = () => {
    const navigate= useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title="Movie-App || Movies "+category.toUpperCase();
    const GetMovie= async () => {
        try {
          const { data } = await axios.get(`/movie/${category}?page=${page} `);
          // setmovie(data.results);
        //   console.log(data);
          if(data.results.length>0){
            setmovie((prevstate)=>[...prevstate,...data.results]);
            setpage(page+ 1);
          }
         else{
    sethasMore(false);
         }
        } catch (error) {
          console.log("ERROR: ", error);
        }
      };
    
    const refreshHandler=()=>{
      if(movie.length===0){
        GetMovie()
      }else{
        setpage(1);
        setmovie([]);
        GetMovie();
        }
    }
    
      useEffect(()=>{
        refreshHandler();
      },[category]);
      
    return  movie.length >0 ?(
        <div className=' w-screen h-screen   '>
            <div className= 'px-[5%] w-full  flex items-center justify-between '>
            
               <h1 className=' text-2xl font-semibold text-zinc-400'>
                <i onClick={()=> navigate(-1)} className=" hover:text-[#6556CD] ri-arrow-left-line"></i> {" "} 
                Movies<small className="text-sm ml-2 text-zinc-500">({category})</small>
                </h1>
            <div className='flex items-center w-[80%]'>
            <TopNav/>
            <DropDown title="Category" options={["popular","top_rated","upcoming","now_playing"]}
             func={(e)=>setcategory(e.target.value)} />
           <div className='w-[2%]'></div>
            
            </div>
            </div>
    
       <InfiniteScroll
       dataLength={movie.length}
       next={GetMovie}
       hasMore={hasMore}
       loader={<h1>Loading... </h1>}
       >
       <Cards data={movie} title={category}/>
    
        </InfiniteScroll>     
          
        </div>
      ):<Loading/> ;
}

export default Movies
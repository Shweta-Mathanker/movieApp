import axios from "../Utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";


const Popular = () => {
    const navigate= useNavigate();
    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title="Movie-App || Popular "+category.toUpperCase();
    const GetPopular= async () => {
        try {
          const { data } = await axios.get(`${category}/popular?page=${page} `);
          // setpopular(data.results);
        //   console.log(data);
          if(data.results.length>0){
            setpopular((prevstate)=>[...prevstate,...data.results]);
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
      if(popular.length===0){
        GetPopular()
      }else{
        setpage(1);
        setpopular([]);
        GetPopular();
        }
    }
    
      useEffect(()=>{
        refreshHandler();
      },[category]);
      
  return popular.length >0 ?(
    <div className=' w-screen h-screen   '>
        <div className= 'px-[5%] w-full  flex items-center justify-between '>
        
           <h1 className=' text-2xl font-semibold text-zinc-400'>
            <i onClick={()=> navigate(-1)} className=" hover:text-[#6556CD] ri-arrow-left-line"></i> {" "} 
            Popular
            </h1>
        <div className='flex items-center w-[80%]'>
        <TopNav/>
        <DropDown title="Category" options={["movie","tv"]}
         func={(e)=>setcategory(e.target.value)} />
       <div className='w-[2%]'></div>
        
        </div>
        </div>

   <InfiniteScroll
   dataLength={popular.length}
   next={GetPopular}
   hasMore={hasMore}
   loader={<h1>Loading... </h1>}
   >
   <Cards data={popular} title={category}/>

    </InfiniteScroll>     
      
    </div>
  ):<Loading/> ;
}

export default Popular
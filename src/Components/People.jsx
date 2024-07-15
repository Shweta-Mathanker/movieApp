import axios from "../Utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";


const People = () => {
    const navigate= useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    document.title="Movie-App || person "+category.toUpperCase();
    const GetPerson= async () => {
        try {
          const { data } = await axios.get(`/person/${category}?page=${page} `);
          // setmovie(data.results);
        //   console.log(data);
          if(data.results.length>0){
            setperson((prevstate)=>[...prevstate,...data.results]);
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
      if(person.length===0){
        GetPerson()
      }else{
        setpage(1);
        setperson([]);
        GetPerson();
        }
    }
    
      useEffect(()=>{
        refreshHandler();
      },[category]);
      
  return person.length >0 ?(
    <div className=' w-screen h-screen   '>
        <div className= 'px-[5%] w-full  flex items-center justify-between '>
        
           <h1 className=' text-2xl font-semibold text-zinc-400'>
            <i onClick={()=> navigate(-1)} className=" hover:text-[#6556CD] ri-arrow-left-line"></i> {" "} 
            People
            </h1>
        <div className='flex items-center w-[80%]'>
        <TopNav/>
        
       <div className='w-[2%]'></div>
        
        </div>
        </div>

   <InfiniteScroll
   dataLength={person.length}
   next={GetPerson}
   hasMore={hasMore}
   loader={<h1>Loading... </h1>}
   >
   <Cards data={person} title={category}/>

    </InfiniteScroll>     
      
    </div>
  ):<Loading/> ;
}

export default People
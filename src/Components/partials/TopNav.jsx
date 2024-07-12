import axios from "../../Utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import defaultimage from '/defaultimg.jpg'
const TopNav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [query]);

  return (
    <div className="w-[70%] h-[10vh] relative flex justify-start m-auto  items-center">
      <i className=" text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search Anything"
      />

      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="  text-zinc-400 text-3xl ri-close-fill"
        ></i>
      )}

      <div className="overflow-auto absolute w-[50%] max-h-[50vh] left-[10%] bg-zinc-200 top-[100%] rounded">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100  "
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path ||
                s.profile_path ? `https://image.tmdb.org/t/p/original/${
                s.backdrop_path || s.profile_path
              }` : defaultimage}
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;

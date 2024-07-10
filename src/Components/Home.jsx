import React from 'react'
import SideNav from './partials/SideNav'
import TopNav from './partials/TopNav'

const Home = () => {
    document.title="Movie-App || homepage"
  return <>
  <SideNav/>
    <div className='w-[80%] h-full '>
        <TopNav/>
    </div>
    </>
}

export default Home
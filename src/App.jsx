import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movies from './Components/Movies'
import Tvshows from './Components/Tvshows'
import People from './Components/People'

const App = () => {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='/TvShows' element={<Tvshows/>}/>
        <Route path='/people' element={<People/>}/>

      </Routes>
    </div>
  )
}

export default App
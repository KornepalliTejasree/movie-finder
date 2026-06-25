import React from 'react'
import {createHashRouter,RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar'
import Favorites from './pages/Favorites'
import MovieDetails from './pages/MovieDetails'
import Home from './pages/Home'
import Movie from './components/Movie'
const App = () => {
  const router=createHashRouter([
    {path:"/",
      element:<div>
        <Navbar />
        <Home />
      </div>
    },
    {path:"/favorites",
      element:<div>
        <Navbar />
        <Favorites />
      </div>
    },
    {path:"/movie/:id",
      element:<div>
        <Navbar />
        <MovieDetails />
      </div>
    },
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

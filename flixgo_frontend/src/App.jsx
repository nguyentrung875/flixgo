import React, { useEffect } from 'react'

import './App.css'
import AddMovie from './pages/Admin/AddMovie'
import Admin from './pages/Admin'
import Dashboard from './pages/Admin/Dashboard'
import Movies from './pages/Admin/Movies'
import Users from './pages/Admin/Users'
import EditUser from './pages/Admin/EditUser'
import Reviews from './pages/Admin/Reviews'

import Home from './pages/Home'
import Homepage from './pages/Home/Homepage'
import Movie from './pages/Home/Movie'
import MovieDetail from './pages/Home/MovieDetail'
import PricingPlan from './pages/Home/PricingPlan'

import SignIn from './pages/Home/SignIn'
import SignUp from './pages/Home/SignUp'
import ForgotPassword from './pages/Home/ForgotPassword'
import NotFound from './pages/Home/NotFound'

import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/' element={<Home />}>
          <Route index element={<Homepage/>}/>
          <Route path='movie' element={<Movie/>}/>
          <Route path='movie-detail' element={<MovieDetail/>}/>
          <Route path='pricing-plans' element={<PricingPlan/>}/>
          <Route path='*' element={<NotFound />} />

        </Route>
        <Route path='/admin/*' element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path='movies' element={<Movies />} />
          <Route path='users' element={<Users />} />
          <Route path='reviews' element={<Reviews />} />
          <Route path='add-movie' element={<AddMovie />} />
          <Route path='edit-user' element={<EditUser />} />

        </Route>

      </Routes>
    </div>

  )
}

export default App

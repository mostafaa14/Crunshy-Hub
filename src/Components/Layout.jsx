import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className='App'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

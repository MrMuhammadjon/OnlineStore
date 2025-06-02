import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { Toaster } from 'react-hot-toast'

const MainLayout = () => {
  return (
    <>
      <Toaster/>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default MainLayout

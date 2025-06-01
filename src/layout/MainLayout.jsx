import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

const MainLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default MainLayout

import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function Home() {
  return (
    // Let's give the site a basic structure for now
    <React.Fragment>
      <Navbar />
      <Outlet/>
      <Footer />
    </React.Fragment>
  )
}

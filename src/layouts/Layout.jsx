import React from 'react'
// router
import { Outlet } from 'react-router-dom'
// css
import "../App.css"
// components
import Header from '../components/Header'
import Footer from '../components/Footer'

import { AnimatePresence } from 'framer-motion'




function Layout() {
  return (
    <div className='app'>
      <Header />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
      <Footer />
    </div>
    
  )
}

export default Layout


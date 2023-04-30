import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// mui
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';

// css
import "../App.css"

// image
import logo from "../assets/images/logo.jpg"

// framer-motion
import { AnimatePresence, motion as m } from 'framer-motion';

// styles
const activeStyle = {
  color: "#DFDFDF"
}

const hamburgerStyle = {
  fontSize: "50px"
}

function Header() {
  const [isShown,setIsShown] = useState(false)
  return (
    <header>
        <div className='nav-wrapper'>
          <NavLink to="/"><img src={logo} alt='logo' /></NavLink>
          <button 
          className='hamburger' 
          onClick={() => setIsShown(!isShown)}
          >
            {isShown ? <CloseIcon style={hamburgerStyle}/> : <DragHandleIcon style={hamburgerStyle} />}
          </button>
        </div>
        
        <m.nav 
        className={isShown ? null : "hidden"}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
      
          <ul>
            <NavLink 
            to="stories"  
            className="nav-link"
            style={({ isActive }) => isActive ? activeStyle : null}
            >Stories</NavLink>
           
            <NavLink 
            to="features" 
            className="nav-link"
            style={({ isActive }) => isActive ? activeStyle : null}
            >Features</NavLink>
            
            <NavLink 
            to="pricing" 
            className="nav-link"
            style={({ isActive }) => isActive ? activeStyle : null}
            >Pricing</NavLink>
            
          </ul>
          <button className={isShown ? null : "hidden"}>GET AN INVITE</button>
        </m.nav>
        

  </header>
  )
}

export default Header
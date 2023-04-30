import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// mui
import DragHandleIcon from '@mui/icons-material/DragHandle';

// css
import "../App.css"

// image
import logo from "../assets/images/logo.jpg"

// styles
const activeStyle = {
  color: "#DFDFDF"
}

const hamburgerStyle = {
  fontSize: "50px"
}

function Header() {
  const [isShown,setIsShown] = useState(true)
  return (
    <header>
        <div className='nav-wrapper'>
          <NavLink to="/"><img src={logo} alt='logo' /></NavLink>
          <button className='hamburger' onClick={() => setIsShown(!isShown)}><DragHandleIcon style={hamburgerStyle} /></button>
        </div>
        
        <nav className={isShown ? null : "hidden"}>
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
        </nav>
        

  </header>
  )
}

export default Header
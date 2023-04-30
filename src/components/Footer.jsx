import { Link, NavLink } from "react-router-dom";

// images
import logoWhite from "../assets/images/logoWhite.png"

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import EastIcon from '@mui/icons-material/East';

// styles
const activeStyle = {
    opacity: 0.6
  }

function Footer() {
  return (
    <footer>
        <div className="navigation">
            <div className="icons">
                <NavLink to="/"><img src={logoWhite} alt='logo' /></NavLink>
                <div className="socials">
                    <Link to="#"><FacebookIcon /></Link>
                    <Link to="#"><YouTubeIcon /></Link>
                    <Link to="#"><TwitterIcon /></Link>
                    <Link to="#"><PinterestIcon /></Link>
                    <Link to="#"><InstagramIcon /></Link>
                </div>
            </div>
            <nav className="footer-nav">

                <NavLink 
                    to="/"  
                    className="nav-link"
                    style={({ isActive }) => isActive ? activeStyle : null}
                    >Home
                </NavLink>

                <NavLink 
                    to="stories"  
                    className="nav-link"
                    style={({ isActive }) => isActive ? activeStyle : null}
                    >Stories
                </NavLink>
            
                <NavLink 
                    to="features" 
                    className="nav-link"
                    style={({ isActive }) => isActive ? activeStyle : null}
                    >Features
                </NavLink>
                
                <NavLink 
                    to="pricing" 
                    className="nav-link"
                    style={({ isActive }) => isActive ? activeStyle : null}
                    >Pricing
                </NavLink>

            </nav>
        </div>
        <div className="copyright">
            <Link to="#" >GET AN INVITE <EastIcon /></Link>
            <p>Copyright 2019.All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer
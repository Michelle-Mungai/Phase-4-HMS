import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import { Link } from 'react-router-dom';
// import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons';
import './Navbar.css';
// import LandingPage from "../Landing/landing";

function Navbar(props) {
    const { handleLogout } = props;
    // const [sidebar, setSidebar] = useState(false)

    // const showSidebar = () => setSidebar(!sidebar)

    const logout = () => {
        fetch('http://localhost:3000/logout', {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                // Logout was successful, do something
            } else {
                // Logout failed, handle error
            }
        })
        .catch(error => {
            // Handle fetch error
        });
    }

    return (
        <div className="navbar-wrapper navbar-container">
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    {/* <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/> 
                    </Link> */}
                    <Link to="/login" className='logout' title="Logout">
                        <BiIcons.BiExit onClick={logout} /> 
                    </Link>
                </div>
            </IconContext.Provider> 
            <br/><br/><br/><br/><br/><br/> 
        </div>
    )
}

export default Navbar;


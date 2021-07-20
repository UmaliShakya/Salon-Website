import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else {
            setButton(true )
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <div  className="navbar">
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo">Suresh Bridal</Link>
                <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link className="nav-link" to='/home'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/about'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/gallery'>Gallery</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/services'>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link  className="nav-link" to='/contact'>Contact us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

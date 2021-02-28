import React from 'react';
import logo from '../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className = "heder-div">
            <img src={logo} alt=""/>
            <h1>Music Xpart</h1>  
            </div>
            
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/salary">Salary</a>
            </nav>     
        </div>
        
    );
};

export default Header;
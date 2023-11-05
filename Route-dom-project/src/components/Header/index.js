import React from 'react';
import {NavLink} from 'react-router-dom'
import './index.css'

function Header(){
    return (
        <div class='headerdiv'>
            <NavLink className="headerlink" to='/home'>Home</NavLink> &nbsp;
            <NavLink className="headerlink" to='/about'>About</NavLink> &nbsp;
            <NavLink className="headerlink" to='/contact'>contact</NavLink> &nbsp;
            <NavLink className="headerlink" to='/creator'>creator</NavLink> &nbsp;
            <NavLink className="headerlink" to='/github'>Github</NavLink>
        </div>
    );
}

export default Header;

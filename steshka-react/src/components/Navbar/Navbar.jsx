import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from 'react-router-dom';



const Navbar = () => {

    return (
     <nav className={n.nav}>
      <div className={n.item}>
        < NavLink to="/profile" style={{ textDecoration: 'none' }}>Profile</NavLink>
        </div>
      <div className={n.item}>
        < NavLink to="/dialogs" style={{ textDecoration: 'none' }}>Messages</NavLink>
        </div>
      <div className={n.item}>
        < NavLink to="/news"style={{ textDecoration: 'none' }}>News</NavLink>
        </div>
      <div className={n.item}>
        < NavLink to="/music"style={{ textDecoration: 'none' }}>Music</NavLink>
        </div>
      <div className={n.item}>
        < NavLink to="/setting"style={{ textDecoration: 'none' }}>Setting</NavLink>
        </div>
  </nav> 
    )           
}


export default Navbar;
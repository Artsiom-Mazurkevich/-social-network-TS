import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';




const Nav = () => {
    return (
        <nav className={s.nav}>
            <NavLink className={({ isActive }) =>(isActive ? s.active : "")} to={'/profile'}>Profile</NavLink>
            <NavLink className={({ isActive }) =>(isActive ? s.active : "")} to={'/dialogs'}>Messages</NavLink>
            <NavLink className={({ isActive }) =>(isActive ? s.active : "")} to={'/users'}>Users</NavLink>
            <NavLink className={({ isActive }) =>(isActive ? s.active : "")} to={'/news'}>News</NavLink>
            <NavLink className={({ isActive }) =>(isActive ? s.active : "")} to={'/music'}>Music</NavLink>
            <NavLink className={({ isActive }) =>(isActive ? s.active : "")} to={'/settings'}>Settings</NavLink>
        </nav>
    );
};

export default Nav;
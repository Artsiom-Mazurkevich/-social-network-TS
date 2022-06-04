import React from 'react';
import s from './Header.module.css';
import {Navigate, NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuthData: boolean
    login: string | null
    logout: () => void
}


const Header = (props: HeaderPropsType) => {
    return (
            <header className={s.header}>
                <img src={'https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg'}/>
                <div>
                    {props.isAuthData ? <div>{props.login} - <button onClick={props.logout}> Logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}
                    {/*{props.isAuthData ? <div>{props.login} - <button onClick={props.logout}> Logout</button></div> : <Navigate to={'/login'}/>}*/}
                </div>
            </header>
    );
};

export default Header;
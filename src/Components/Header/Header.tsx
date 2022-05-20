import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuthData: boolean
    login: string | null
}


const Header = (props: HeaderPropsType) => {
    return (
            <header className={s.header}>
                <img src={'https://st4.depositphotos.com/9449108/25247/i/600/depositphotos_252470670-stock-photo-illustration-of-a-japanese-warrior.jpg'}/>
                <div>
                    {props.isAuthData ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </header>
    );
};

export default Header;
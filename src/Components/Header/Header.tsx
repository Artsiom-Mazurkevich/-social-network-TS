import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
            <header className={s.header}>
                <img src={'https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=065f279099ded1062688e357b155dc29'}/>
            </header>
    );
};

export default Header;
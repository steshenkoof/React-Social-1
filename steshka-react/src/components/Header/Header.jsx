import React from 'react';
import h from './Header.module.css';

const Header = () => {
    return (
        <header className={h.header}>
    <img src="https://sinail.ru/local/templates/main/img/PR.png"
     alt="картинка лого" className={h.img}></img>
    </header>
    )
    
}

export default Header;
import React from "react";
import style from './Header.module.css'
import headerLogo from '../../assets/logobear.svg'

const Header = () => {
    return(
        <div className={style.container}>
            <div className={style.logo}>
                <img className={style.logoImg} src={headerLogo} alt={'logo'}/>
            </div>
        </div>
    )
};

export default Header
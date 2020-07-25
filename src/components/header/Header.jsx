import React from "react";
import style from './Header.module.css'
import headerLogo from '../../assets/logobear.svg'
import {NavLink} from "react-router-dom";
import filter from "../../assets/filter.svg"

const Header = () => {
    return(
        <div className={style.container}>
            <div className={style.logo}>
                <img className={style.logoImg} src={headerLogo} alt={'logo'}/>
            </div>
            <div className={style.navbar}>
                <NavLink className={style.link} activeClassName={style.activeLink} to={'/jogs'}>
                    JOGS
                </NavLink>
                <NavLink className={style.link} activeClassName={style.activeLink} to={'/login'}>
                    INFO
                </NavLink>
                <NavLink className={style.link} activeClassName={style.activeLink} to={'/'}>
                    CONTACT US
                </NavLink>
                <img className={style.filterImg} src={filter} alt={'filter'}/>
            </div>
        </div>
    )
};

export default Header
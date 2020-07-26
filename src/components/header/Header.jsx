import React, {useState} from "react";
import style from './Header.module.css'
import headerLogo from '../../assets/logobear.svg'
import {NavLink} from "react-router-dom";
import filter from "../../assets/filter.svg"
import {DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import expand from "../../assets/more.svg"

const Header = () => {

    const [isNavExpanded, expandNav] = useState(false);

    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                <NavLink className={style.link} activeClassName={style.activeLink} to={'/form'}>
                    CONTACT US
                </NavLink>
                <img
                    className={style.mobileNav}
                    src={expand}
                    alt={'view'}
                    onClick={() => expandNav(!isNavExpanded)}
                />
                {isNavExpanded && <div className={style.navStack}>
                    <NavLink className={style.expandedLink} activeClassName={style.activeLink} to={'/jogs'}>
                        JOGS
                    </NavLink>
                    <NavLink className={style.expandedLink} activeClassName={style.activeLink} to={'/login'}>
                        INFO
                    </NavLink>
                    <NavLink className={style.expandedLink} activeClassName={style.activeLink} to={'/form'}>
                        CONTACT US
                    </NavLink>
                </div>}
                <img className={style.filterImg} src={filter} alt={'filter'}/>
            </div>
        </div>
            </MuiPickersUtilsProvider>
    )
};

export default Header
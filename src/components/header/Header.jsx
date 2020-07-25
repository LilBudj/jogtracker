import React from "react";
import style from './Header.module.css'
import headerLogo from '../../assets/logobear.svg'
import {NavLink} from "react-router-dom";
import filter from "../../assets/filter.svg"
import {DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {withStyles} from "@material-ui/core";
import HeaderDatePicker from "../utils/HeaderDatePicker";

const Header = () => {
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
                <img className={style.filterImg} src={filter} alt={'filter'}/>
            </div>
        </div>
            <div className={style.postHeader}>
                <div className={style.dateContainer}>
                    <span>Date from</span>
                    <HeaderDatePicker
                        variant={'inline'}
                        inputVariant={'outlined'}
                    />
                </div>
                <div className={style.dateContainer}>
                    <span>Date from</span>
                    <HeaderDatePicker
                        variant={'inline'}
                        inputVariant={'outlined'}
                    />
                </div>
            </div>
            </MuiPickersUtilsProvider>
    )
};

export default Header
import React, {useState} from "react";
import style from './Header.module.css'
import headerLogo from '../../assets/logobear.svg'
import {NavLink} from "react-router-dom";
import filter from "../../assets/filter.svg"
import {DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import expand from "../../assets/more.svg"
import {connect} from "react-redux";
import {toggleFilter} from "../../redux/jogReducer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Header = (props) => {

    const [isNavExpanded, expandNav] = useState(false);
    const [anchor, setAnchor] = useState(null);

    const expandMenu = (e) => {
        expandNav(!isNavExpanded);
        setAnchor(e.currentTarget)
    };

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
                    onClick={expandMenu}
                />
                <Menu
                    open={isNavExpanded}
                    anchorEl={anchor}
                    onClose={() => expandNav(false)}
                >
                    <MenuItem>
                        <NavLink className={style.expandedLink} activeClassName={style.expandedActiveLink} to={'/jogs'}>
                        JOGS
                    </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink className={style.expandedLink} activeClassName={style.expandedActiveLink} to={'/login'}>
                        INFO
                    </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink className={style.expandedLink} activeClassName={style.expandedActiveLink} to={'/form'}>
                        CONTACT US
                    </NavLink>
                    </MenuItem>
                </Menu>
                <img
                    onClick={props.toggleFilter}
                    className={style.filterImg}
                    src={filter}
                    alt={'filter'}
                />
            </div>
        </div>
            </MuiPickersUtilsProvider>
    )
};

export default connect(null, {
    toggleFilter
})(Header)
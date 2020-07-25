import React from "react";
import style from "./Login.module.css"
import bear from "../../assets/bear-face.svg"

const Login = () => {
    return(
        <div className={style.window}>
            <img className={style.bearImg} src={bear} alt={'bear'}/>
            <button className={style.logButton}>Let me in</button>
        </div>
    )
};

export default Login
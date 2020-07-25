import React from "react";
import style from "./JogNote.module.css"
import jog from "../../assets/jog-icon.svg"

const JogNote = (props) => {
    return(
        <div className={style.jogContainer}>
            <img className={style.jogIcon} src={jog} alt={'icon'}/>
            <div className={style.jogInfo}>
                <div className={style.date}>
                    20.07.2020
                </div>
                <div>
                    <span className={style.sign}>Speed:</span>
                    <span className={style.display}>10</span>
                </div>
                <div>
                    <span className={style.sign}>Time:</span>
                    <span className={style.display}>10</span>
                </div>
                <div>
                    <span className={style.sign}>Distance:</span>
                    <span className={style.display}>10</span>
                </div>
            </div>
        </div>
    )
};

export default JogNote
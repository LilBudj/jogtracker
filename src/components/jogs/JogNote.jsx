import React from "react";
import style from "./JogNote.module.css"
import jog from "../../assets/jog-icon.svg"

const JogNote = (props) => {

    let date = new Date(props.date * 1000);

    return(
        <div className={style.jogContainer}>
            <img className={style.jogIcon} src={jog} alt={'icon'}/>
            <div className={style.jogInfo}>
                <div className={style.date}>
                    {date.toDateString()}
                </div>
                <div>
                    <span className={style.sign}>Speed:</span>
                    <span className={style.display}>{Math.ceil(props.distance / props.time * 1000)/1000} kmh</span>
                </div>
                <div>
                    <span className={style.sign}>Time:</span>
                    <span className={style.display}>{props.time} minutes</span>
                </div>
                <div>
                    <span className={style.sign}>Distance:</span>
                    <span className={style.display}>{props.distance} km</span>
                </div>
            </div>
        </div>
    )
};

export default JogNote
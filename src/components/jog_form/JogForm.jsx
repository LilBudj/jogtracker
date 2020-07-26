import React from "react";
import style from "./JogForm.module.css"
import axios from "axios";

class JogForm extends React.Component{

    componentDidMount() {

    }

    render() {
        return(
            <div className={style.window}>
                <div className={style.fieldStack}>
                    <div className={style.inputField}>
                        <span>Time:</span>
                        <input className={style.jogInput}/>
                    </div>
                    <div className={style.inputField}>
                        <span>Time:</span>
                        <input className={style.jogInput}/>
                    </div>
                    <div className={style.inputField}>
                        <span>Time:</span>
                        <input className={style.jogInput}/>
                    </div>
                </div>
                <button className={style.jogSubmit}>Save</button>
            </div>
        )
    }
}

export default JogForm
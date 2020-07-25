import React from "react";
import style from "./JogNote.module.css"
import JogNote from "./JogNote";

class JogContainer extends React.Component{

    render() {
        return(
            <div className={style.jogsContainer}>
                <JogNote/>
                <JogNote/>
            </div>
        )
    }
}

export default JogContainer
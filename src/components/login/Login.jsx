import React from "react";
import style from "./Login.module.css"
import bear from "../../assets/bear-face.svg"
import {connect} from "react-redux";
import {logInUser} from "../../redux/jogReducer";
import {Redirect} from "react-router";

class Login extends React.Component {

    render() {

        if (this.props.isSession) return <Redirect to={'/jogs'}/>;
        return (
            <div className={style.window}>
                <img className={style.bearImg} src={bear} alt={'bear'}/>
                    <button
                        className={style.logButton}
                        onClick={this.props.logInUser}
                    >
                        Let me in
                    </button>
            </div>
        )
    };
}

let mapStateToProps = (state) => ({
    isSession: state.isSession
});

export default connect(mapStateToProps, {
    logInUser
})(Login)
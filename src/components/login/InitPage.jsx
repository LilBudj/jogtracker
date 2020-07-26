import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {startSession} from "../../redux/jogReducer";


class InitPage extends React.Component{

    componentDidMount() {
        let accessToken = localStorage.getItem('accessToken');
        let tokenExpirationDate = !!accessToken ?
            new Date((+JSON.parse(accessToken).date + +JSON.parse(accessToken).expires) * 1000)
            :
            new Date(null);
        if (accessToken && (tokenExpirationDate > new Date())) {
            this.props.startSession()
        }
    }

    render() {
        if (this.props.isSession) {
            return <Redirect to={'/jogs'}/>
        }
        else return <Redirect to={'/login'}/>;
    }
}

let mapStateToProps = (state) => ({
    isSession: state.isSession
});

export default connect(mapStateToProps, {
    startSession
})(InitPage)
import React from "react";
import style from "./JogNote.module.css"
import JogNote from "./JogNote";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import HeaderDatePicker from "../utils/HeaderDatePicker";
import sad from "../../assets/nothing.svg"
import {connect} from "react-redux";
import {fetchJogs} from "../../redux/jogReducer";

class JogContainer extends React.Component{

    componentDidMount() {
        this.props.fetchJogs();
    }

    jogsArray = this.props.jogs.map(j => <JogNote {...j} key={j.index}/>);

    render() {
        return(
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                {this.props.jogs.length ? <div className={style.jogsContainer}>
                    {this.jogsArray}
            </div>: <div className={style.emptyStack}>
                    <div className={style.emptyMessage}>
                        <img className={style.sadImage} src={sad} alt={'sad'}/>
                        <div className={style.message}>Nothing is there</div>
                    </div>
                    <button className={style.jogCreate}>
                        Create your first jog
                    </button>
                </div>}
            </MuiPickersUtilsProvider>
        )
    }
}

let mapStateToProps = (state) => ({
    jogs: state.jogs
});

export default connect(mapStateToProps, {
    fetchJogs
})(JogContainer)
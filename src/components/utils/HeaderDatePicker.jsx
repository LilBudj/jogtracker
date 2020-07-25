import React from "react";
import {createStyles, withStyles} from "@material-ui/core";
import {DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const styles = (theme) => ({
    input: {
        height: '31px',
        backgroundColor: '#fff',
        fontFamily: [
            'San Frans',
            'sans-serif'
        ].join(','),
        fontSize: '13px'
    }
});

const HeaderDatePicker = ({classes, ...rest}) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
            {...rest}
            InputProps={{className: classes.input}}
        />
    </MuiPickersUtilsProvider>
);

export default withStyles(styles)(HeaderDatePicker)
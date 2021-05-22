import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import timeStyle from '../Style/timeStyle'


const useStyle = makeStyles(timeStyle)


const Time = ({ time }) => {
    const classes = useStyle()
    return (
        <>
            <Typography variant="h4" align='center' className={classes.time}>
                {(time.h >= 10) ? time.h : '0' + time.h}:
                {(time.m >= 10) ? time.m : '0' + time.m}:
                {(time.s >= 10) ? time.s : '0' + time.s}:
                {(time.ms >= 10) ? time.ms : '0' + time.ms}
            </Typography>
        </>

    )
}

export default Time


import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Divider, makeStyles } from '@material-ui/core'
import timeSaveStyle from '../Style/timeSaveStyle'


const useStyle = makeStyles(timeSaveStyle)

const SaveTime = ({ timeSave }) => {
    const classes = useStyle()
    return (
        <>
            <Typography
                className={classes.time}
                variant="h6"
            >
                {timeSave}
            </Typography>
            <Divider className={classes.divider} />
        </>
    )
}

export default SaveTime

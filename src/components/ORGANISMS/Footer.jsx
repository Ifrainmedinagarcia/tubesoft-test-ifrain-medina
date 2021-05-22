import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import footerStyle from '../Style/footerStyle'

const useStyle = makeStyles(footerStyle)

const Footer = () => {
    const classes = useStyle()
    return (
        <div className={classes.footer}>
            <Typography
                className={classes.typography}
                variant="h6"
                align='center'
                color="inherit">Made by Ifrain Medina García
            </Typography>
        </div>
    )
}

export default Footer

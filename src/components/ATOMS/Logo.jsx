import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Tubesoft from '../../Assets/TB-Color-B.png'
import logoStyle from '../Style/logoStyle'

const useStyle = makeStyles(logoStyle)

const Logo = () => {
    const classes = useStyle()
    return (
        <Grid className={classes.container} container justify='center'>
            <Grid className={classes.item} item xs={12}>
                <img className={classes.img} src={Tubesoft} alt="tubesoft" />
            </Grid>
        </Grid>
    )
}

export default Logo

import { Grid, makeStyles, Button, IconButton } from '@material-ui/core'
import React from 'react'
import Time from '../ATOMS/Time'
import cardChronometer from '../Style/cardChronometerStyle'
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore'
import SaveTime from '../MOLECULES/SaveTime'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import Tooltip from '@material-ui/core/Tooltip'
import { connect } from 'react-redux'
import { deleteTime } from '../../REDUX/actionsCreators'
import { useChronometer } from '../Hooks/useChronometer'


const useStyle = makeStyles(cardChronometer)

export const CardChronometer = ({ time, deleteTime }) => {
    const classes = useStyle()
    const { started, stopped, clear, timeStatus, start, stop, finalize, resume } = useChronometer()

    const timeDelete = () => {
        time.map(t => {
            return deleteTime(t.id_time)
        })
    }
    return (
        <Grid container justify='center' spacing={10} className={classes.card}>
            <Grid item xs={12}>
                <Time time={timeStatus} />
            </Grid>

            <Grid item className={classes.containerBtn} xs={12} md={4}>
                {
                    !start ?
                        <Button onClick={started} variant="contained" className={classes.btn} size='large'>
                            Start
                        </Button>
                        :
                        <Button onClick={finalize} variant="contained" className={classes.btn} size='large'>
                            Finalize
                        </Button>
                }

            </Grid>

            {
                !start ?
                    ''
                    : <Grid item className={classes.containerBtn} xs={12} md={4}>
                        {
                            !stop ?
                                <Button onClick={stopped} variant="contained" size='large' color="secondary">
                                    Stop
                                </Button>
                                :
                                <Button onClick={resume} variant="contained" size='large' color="secondary">
                                    Resume
                                </Button>
                        }
                    </Grid>
            }

            <Grid item xs={12}>
                {
                    time ?
                        time.map(t => (
                            <SaveTime key={t.id_time} timeSave={t.time} />
                        ))
                        : ''
                }

            </Grid>

            <Grid className={classes.containerBtn} item xs={6} >
                {
                    !start ?
                        <IconButton disabled onClick={clear} className={classes.restore} color="inherit">
                            <SettingsBackupRestoreIcon fontSize="large" />
                        </IconButton>
                        :
                        <Tooltip title='Reset'>
                            <IconButton onClick={clear} className={classes.restore} color="inherit">
                                <SettingsBackupRestoreIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>

                }
            </Grid>
            <Grid className={classes.containerBtn} item xs={6}>
                <Tooltip title="Delete records">
                    <IconButton onClick={timeDelete} className={classes.restore} color="inherit">
                        <HighlightOffIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    time: state.timeReducer.time
})

const mapDispatchToProps = dispatch => ({
    deleteTime(id) {
        dispatch(deleteTime(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CardChronometer)

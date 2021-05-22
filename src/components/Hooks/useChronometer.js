import { useEffect, useState } from 'react'
import { getTime, postTime } from '../../REDUX/actionsCreators'
import store from '../../REDUX/store'

export function useChronometer() {
    const [start, setStart] = useState(false)
    const [stop, setStop] = useState(false)
    const [interv, setInterv] = useState()
    const [timeStatus, setTimeStatus] = useState({
        h: 0,
        m: 0,
        s: 0,
        ms: 0
    })

    const udatedTime = {
        h: timeStatus.h,
        m: timeStatus.m,
        s: timeStatus.s,
        ms: timeStatus.ms,
    }

    useEffect(() => {
        store.dispatch(getTime())
    }, [])

    const run = () => {
        if (udatedTime.m === 60) {
            udatedTime.h++
            udatedTime.m = 0
        }
        if (udatedTime.s === 60) {
            udatedTime.m++
            udatedTime.s = 0
        }
        if (udatedTime.ms === 100) {
            udatedTime.s++
            udatedTime.ms = 0
        }
        udatedTime.ms++
        return setTimeStatus({
            h: udatedTime.h,
            m: udatedTime.m,
            s: udatedTime.s,
            ms: udatedTime.ms
        })
    }
    const data = {
        "time": `${(udatedTime.h >= 10) ? udatedTime.h : '0' + udatedTime.h}:
                ${(udatedTime.m >= 10) ? udatedTime.m : '0' + udatedTime.m}:
                ${(udatedTime.s >= 10) ? udatedTime.s : '0' + udatedTime.s}:
                ${(udatedTime.ms >= 10) ? udatedTime.ms : '0' + udatedTime.ms}`
    }
    const started = () => {
        if (!start) {
            setStart(true)
            return setInterv(setInterval(run, 10))
        }
    }
    const finalize = () => {
        setStart(false)
        setStop(false)
        setTimeStatus({
            h: 0,
            m: 0,
            s: 0,
            ms: 0
        })
        store.dispatch(postTime(data))
        return clearInterval(interv)
    }
    const stopped = () => {
        if (!stop) {
            setStop(true)
            return clearInterval(interv)
        }
    }
    const resume = () => {
        setStop(false)
        return setInterv(setInterval(run, 10))
    }
    const clear = () => {
        setTimeStatus({
            h: 0,
            m: 0,
            s: 0,
            ms: 0
        })
        setStop(true)
        return clearInterval(interv)
    }

    return { started, stopped, clear, timeStatus, start, stop, finalize, resume }
}


import axios from 'axios'
import { DELETE_TIME, GET_TIME } from './ actions'
import store from './store'


export const getTime = () => dispatch => {
    axios.get('http://localhost:3001/v1/api/time')
        .then(res => {
            return dispatch({
                type: GET_TIME,
                time: res.data.res
            })
        }).catch(e => {
            console.log(e)
        })
}


export const postTime = data => dispatch => {
    axios.post('http://localhost:3001/v1/api/time', data, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            store.dispatch(getTime())
        }).catch(e => {
            console.log(e)
        })
}


export const deleteTime = (id) => dispatch => {
    axios.delete(`http://localhost:3001/v1/api/time/${id}`)
        .then(res => {
            return dispatch({
                type: DELETE_TIME,
                time: []
            })
        }).catch(e => {
            console.log(e)
        })
}

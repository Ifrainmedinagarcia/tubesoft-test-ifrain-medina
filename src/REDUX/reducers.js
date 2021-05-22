import { DELETE_TIME, GET_TIME } from "./ actions"


let initialStateTime = {
    time: []
}


export const timeReducer = (state = initialStateTime, action) => {
    switch (action.type) {
        case GET_TIME:
            return {
                ...state,
                time: action.time
            }
        case DELETE_TIME:
            return {
                ...state,
                time: action.time
            }
        default:
            return state
    }
}


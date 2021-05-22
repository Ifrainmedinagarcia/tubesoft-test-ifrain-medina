import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { timeReducer } from './reducers'




export default createStore(
    combineReducers({
        timeReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)
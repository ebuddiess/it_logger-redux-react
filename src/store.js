import {createStore , applyMiddleware} from 'redux'
import {composeWithDevTools}from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from  './reducers'

const initialState = {}

const middlewaare = [thunk]

const store = createStore(rootReducer , initialState , composeWithDevTools(applyMiddleware(...middlewaare)) ) 

export default store   
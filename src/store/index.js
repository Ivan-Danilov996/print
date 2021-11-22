import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import inputReducer from "../reducers/inputReducer";
import modalReducer from "../reducers/modalReducer"


const reducer = combineReducers({
    inputReducer,
    modalReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk))); 
export default store;
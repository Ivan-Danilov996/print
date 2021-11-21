import {INPUT_CHANGE, SPEED_CHANGE, SET_START_TIME} from './actionTypes'


export const inputChange = (value) => (
    {
        type: INPUT_CHANGE, payload: {value}
    }
)

export const speedChange = (currentTime) => (
    {
        type: SPEED_CHANGE, payload: {currentTime}
    }
)

export const setStartTime = (startTime) => (
    {
        type: SET_START_TIME, payload: {startTime}
    }
)
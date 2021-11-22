import {INPUT_CHANGE, SPEED_CHANGE, SET_START_TIME, SET_ACTIVE_MODAL, RESET_DATA} from './actionTypes'


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

export const setActiveModal = (active) => (
    {
        type: SET_ACTIVE_MODAL, payload: { active }
    }
)

export const resetData = () => (
    {
        type: RESET_DATA
    }
)
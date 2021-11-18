import {INPUT_CHANGE} from './actionTypes'


export const inputChange = (value) => (
    {
        type: INPUT_CHANGE, payload: {value}
    }
)
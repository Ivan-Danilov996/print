import { INPUT_CHANGE, SPEED_CHANGE, SET_START_TIME, RESET_DATA } from '../actions/actionTypes'

const initialState = {
    value: '',
    currentSymbol: 0,
    danger: false,
    text: `Бандлинг - это хорошо`,
    count: 0,
    startTime: 0,
    currentTime: 0,
}

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_CHANGE: {
            const { value } = action.payload
            const startTime = state.count === 1 ? Date.now() : state.startTime
            if (value === state.text[state.currentSymbol]) {
                return {
                    ...state,
                    currentSymbol: state.currentSymbol += 1,
                    danger: false,
                    count: state.count += 1,
                    startTime,
                    currentTime: Date.now()
                }
            }
            return {
                ...state,
                danger: true,
                count: state.count += 1,
                startTime,
                currentTime: Date.now()
            }
        }
        case SPEED_CHANGE: {
            const { currentTime } = action.payload
            return {
                ...state,
                currentTime
            }
        }
        case SET_START_TIME: {
            const { startTime } = action.payload
            return {
                ...state,
                startTime
            }
        }
        case RESET_DATA: {
            return initialState
        }
        default:
            return state
    }
}

export default inputReducer
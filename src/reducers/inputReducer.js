import {INPUT_CHANGE} from '../actions/actionTypes'

const initialState = {
    value: '',
    currentSymbol: 0,
    danger: false,
    text: `Бандлинг - это хорошо, но по мере роста вашего приложения, ваш бандл тоже будет расти. Особенно если вы подключаете крупные сторонние библиотеки. Вам нужно следить за кодом, который вы подключаете, чтобы случайно не сделать приложение настолько большим, что его загрузка займёт слишком много времени.`, 
    count: 0, 
    startTime: 0,
    currentTime: 0,
}

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_CHANGE:
            const {value} = action.payload
            const startTime = state.count === 1? Date.now() : state.startTime
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
    
        default:
            return state
    }
}

export default inputReducer
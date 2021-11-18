import React from 'react'
import { inputChange } from '../actions/actionCreators';
import { useRef } from 'react';
import { useDispatch } from 'react-redux'

function InputText({value}) {

    const inputEl = useRef(null);
    const dispatch = useDispatch()

    const handleBlur = () => {
        inputEl.current.focus();
      }
      const handleChange = (e) => {
        const value = e.currentTarget.value
        dispatch(inputChange(value))
      }
      const handleKeyDown = (e) => {
        if ([8, 9].includes(e.keyCode)) e.preventDefault()
      }

    return (
        <input 
            ref={inputEl} 
            onChange={handleChange} 
            onKeyDown={handleKeyDown} 
            value={value} 
            autoFocus 
            onBlur={handleBlur}
        />
    )
}

export default InputText

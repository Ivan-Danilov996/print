import React, { useState } from 'react'
import { inputChange, setStartTime, speedChange } from '../actions/actionCreators';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux'

function InputText({ value }) {

  const inputEl = useRef(null);
  const dispatch = useDispatch()

  const [startTimer, setStartTimer] = useState(false)

  const handleBlur = () => {
    inputEl.current.focus();
  }
  const handleChange = (e) => {
    const value = e.currentTarget.value
    dispatch(inputChange(value))

    if (!startTimer) {
      dispatch(setStartTime(Date.now()))
      setStartTimer(start => (
        start = setInterval(() => {
          dispatch(speedChange(Date.now()))
        }, 1000)))
    }

  }
  const handleKeyDown = (e) => {
    if ([8, 9].includes(e.keyCode)) e.preventDefault()
  }

  useEffect(() => {
    return () => {
      setStartTimer(start => clearInterval(start))
    }
  }, [])


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

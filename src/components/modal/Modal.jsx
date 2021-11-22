import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveModal } from '../../actions/actionCreators'
import "./modal.css"


export default function Modal() {
    const {active} = useSelector(state => state.modalReducer)
    const dispatch = useDispatch()
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => dispatch(setActiveModal(false))}>
            <div className={active ? 'modal__content active' : 'modal__content'}>
                <div className="blur-block"></div>
            </div>
        </div>
    )
}
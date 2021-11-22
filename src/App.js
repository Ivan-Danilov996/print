import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TextElement from './components/TextElement';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'

import InputText from './components/InputText';
import ChangeInfo from './components/ChangeInfo';
import Modal from './components/modal/Modal';
import { setActiveModal } from './actions/actionCreators';
import { useEffect } from 'react';

const App = () => {

  const dispatch = useDispatch()

  const {value, currentSymbol, text, danger, count, currentTime, startTime} = useSelector(state => state.inputReducer)

  useEffect(()=> {
    dispatch(setActiveModal(true))
  }, [])

  if (currentSymbol === text.length) {
    dispatch(setActiveModal(true))
  }





  return (
    <>
      <Container className="p-5 mb-4 bg-light rounded-3">
        <TextElement 
          currentSymbol={currentSymbol}
          text={text}
          danger={danger}
        />
        {/* <ChangeInfo percent={getPercent()} speed={isNaN(getSpeed()) || !isFinite(getSpeed()) ?  0 : getSpeed()}/> */}
        <ChangeInfo/>
        <InputText 
          value={value} startTime={startTime}
        />
      </Container>
      <Modal/>
    </>
  )
};

export default App;



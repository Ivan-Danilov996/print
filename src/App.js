import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TextElement from './components/TextElement';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'

import InputText from './components/InputText';
import ChangeInfo from './components/ChangeInfo';

const App = () => {

  const {value, currentSymbol, text, danger, count, currentTime, startTime} = useSelector(state => state.inputReducer)


  let percent

  if (count === 0) {
    percent = 100
  } else if (currentSymbol === 0) {
    percent = 0
  } else {
    percent = Math.floor(currentSymbol / count * 100)
  }

  const minutes = currentTime / 60000 - startTime / 60000

  const speed = Math.floor(count/minutes)

  return (
    <Container className="p-5 mb-4 bg-light rounded-3">
      <TextElement 
        currentSymbol={currentSymbol}
        text={text}
        danger={danger}
      />
      <ChangeInfo percent={percent} speed={isNaN(speed) || !isFinite(speed) ?  0 : speed}/>
      <InputText 
        value={value} 
      />
    </Container>
  )
};

export default App;



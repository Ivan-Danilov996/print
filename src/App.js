import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TextElement from './components/TextElement';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux'

import InputText from './components/InputText';
import ChangeInfo from './components/ChangeInfo';

const App = () => {

  const {value, currentSymbol, text, danger, count} = useSelector(state => state.inputReducer)


  let percent

  if (count === 0) {
    percent = 100
  } else if (currentSymbol === 0) {
    percent = 0
  } else {
    percent = Math.floor(currentSymbol / count * 100)
  }

  return (
    <Container className="p-5 mb-4 bg-light rounded-3">
      <TextElement 
        currentSymbol={currentSymbol}
        text={text}
        danger={danger}
      />
      <ChangeInfo percent={percent}/>
      <InputText 
        value={value}
      />
    </Container>
  )
};

export default App;



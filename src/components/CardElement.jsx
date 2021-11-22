import React from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import accuracyLogo from '../assets/accuracy.png'

function CardElement() {
    const {currentSymbol, count} = useSelector(state => state.inputReducer)

    const getPercent = () => {
      if (count === 0) {
        return 100
      } else if (currentSymbol === 0) {
        return 0
      } else {
        return Math.floor(currentSymbol / count * 100)
      }
    }
    
    const cardStyle = "bg-light border-0"
    return (
        <Card className={cardStyle}>
          <Card.Img variant="top" src={accuracyLogo} />
          <Card.Body>
            <Card.Title>{'Точность'}</Card.Title>
            <Card.Text>
              {getPercent()} {'%'}
            </Card.Text>
          </Card.Body>
        </Card>
    )
}

export default CardElement

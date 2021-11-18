import React from 'react'
import { Card } from 'react-bootstrap'

function CardElement({title, src, value, unit}) {
    const cardStyle = "bg-light border-0"
    return (
        <Card className={cardStyle}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {value} {unit}
            </Card.Text>
          </Card.Body>
        </Card>
    )
}

export default CardElement

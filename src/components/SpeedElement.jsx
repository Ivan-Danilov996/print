import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import speedLogo from '../assets/speed.png'

function SpeedElement() {

    const {count, startTime} = useSelector(state => state.inputReducer)
    //const {startTime} = useSelector(state => state.inputReducer)
    const [currentTime, setCurrentTime] = useState(0)
    const [intervalId, setIntervalId] = useState(null)
    const [speed, setSpeed] = useState(0)

    useEffect(() => {
        if(startTime) {
            setInterval(() => {
                setSpeed(getSpeed(startTime, count, Date.now()))
            }, 1000)
        }
    }, [startTime]);

    // if(startTime && !currentTime) {
    //     //setCurrentTime(Date.now())
    //     //setSpeed(prevSpeed => )
    // }

    // useEffect(() => {
    //     if (startTime) {
    //         setTimeout(() => {
    //             console.log('start')
    //             setCurrentTime(Date.now)
    //             setSpeed(getSpeed())
    //         }, 1000)
    //     }
    //     return clearInterval(intervalId)
    //   }, [currentTime]);


    const getSpeed = (startTime, count, currentTime) => {
        if(!currentTime) {
            return 0
        }
        const minutes = currentTime / 60000 - startTime / 60000
        const speed = Math.floor(count/minutes)
        return isNaN(speed) || !isFinite(speed) ?  0 : speed
    }

    //console.log(currentTime / 60000 - startTime / 60000)

    //const speed = isNaN(getSpeed()) || !isFinite(getSpeed()) ?  0 : getSpeed()

    const cardStyle = "bg-light border-0"
    return (
        <Card className={cardStyle}>
          <Card.Img variant="top" src={speedLogo} />
          <Card.Body>
            <Card.Title>{'Скорость'}</Card.Title>
            <Card.Text>
              {speed} {'зн./мин'}
            </Card.Text>
          </Card.Body>
        </Card>
    )
}

export default SpeedElement

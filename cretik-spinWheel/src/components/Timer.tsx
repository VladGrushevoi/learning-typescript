import {useState, useEffect} from 'react'
import { Button, Col, Row } from "react-bootstrap"
import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types';

interface TimerProps{
    dataForWheel: WheelData[],
    play: () => void,
}

export const Timer = ({play} : TimerProps) => {
    const [seconds, setSeconds] = useState(180);
    const [isActive, setIsActive] = useState(false);

    const secondToTimeString = (seconds: number) : string => {
        const minutes = Math.floor(seconds / 60);
        const sec = seconds - (minutes * 60);
        return minutes+":"+(sec === 0 ? "00" : sec <= 9 ? '0'+sec : sec);
    }

    const playClick = () => {
        play()
    }

    useEffect(() => {
        let interval = null;
        if(isActive){
            interval =  setInterval(() => {
                setSeconds(prev => prev - 1);
                if(seconds === 0){
                    setIsActive(false)
                    setSeconds(0)
                }
            }, 1000);
        }else if(seconds < 0){
            setIsActive(false)
            clearInterval(interval!);
        }

        return () => clearInterval(interval!)
    }, [seconds, isActive])

    const startTimer = () => {
        setSeconds(180);
        setIsActive(true)
    }

    return (
        <>
            <Col className="pr-10">
                <Row><h2 className="text-center tracking-widest">ТАЙМЕР</h2></Row>
                <Row><h2 className="text-center tracking-widest">{secondToTimeString(seconds)}</h2></Row>
                <Row><Button onClick={startTimer}>СТАРТ</Button></Row>
                <Row className='my-2'>
                    <Button variant='warning' onClick={playClick}>ГРАТИ</Button>
                </Row>
            </Col>
            <Col md={9}></Col>
        </>
    )
}
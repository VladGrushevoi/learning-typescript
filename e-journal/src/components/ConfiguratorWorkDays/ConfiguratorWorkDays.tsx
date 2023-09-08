import { Button, Col, Row } from "react-bootstrap";
import { useState,  useEffect } from "react";
import { ListWorkHour } from "./ListWorkHour";
import { AddWorkHourForm } from "./AddWorkHourForm";
import { convertDayOfWeekToNameDay } from "../../utils/convertDayOfWeekToNameDay";
import { useAppSelector } from "../../Redux/storehooks";
import { useConfiguratorWorkDay } from "./useConfoguratorWorkDays";

interface ConfiGuratorWorkDaysProps {

}


export const ConfiGuratorWorkDays = ({}: ConfiGuratorWorkDaysProps) => {
    const userToken = useAppSelector(state => state.user.JwtToken);
    const {workDays, fetchWorkDaysInfo} = useConfiguratorWorkDay(userToken)
    const [chooseDayIndex, setDayIndex] = useState(0);
    useEffect(() => {
        fetchWorkDaysInfo()
    }, [])
    const handleChooseDay = (dayIndex: number) => {
        setDayIndex(dayIndex)
    }

    return (
        <>
            <Row className="gap-2">
                {
                    workDays && workDays.map((day, index) => {
                        return (
                            <Col key={Math.random()}>
                                <Button  
                                    onClick={() => handleChooseDay(index)}
                                    className=""
                                    variant={chooseDayIndex !== index ? 'secondary' : 'success'}
                                >
                                    {convertDayOfWeekToNameDay(day.dayOfWeek)}
                                </Button>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row>
                {
                    workDays && 
                    <>
                        <ListWorkHour workHours={workDays[chooseDayIndex].times} />
                        <AddWorkHourForm isWorkDay={workDays[chooseDayIndex].isWorkDay} />
                    </>
                }
            </Row>
        </>
    )
}
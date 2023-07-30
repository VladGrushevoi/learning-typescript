import { Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { ListWorkHour } from "./ListWorkHour";
import { AddWorkHourForm } from "./AddWorkHourForm";
import { WorkHour } from "../../types/work-hour";

interface ConfiGuratorWorkDaysProps {
    days: {
        name: string,
        times: WorkHour[]
    }[],
    addNewWorkHour: (dayIndex: number, newWorkHour: WorkHour) => void, 
}


export const ConfiGuratorWorkDays = ({ days, addNewWorkHour }: ConfiGuratorWorkDaysProps) => {

    const [chooseDayIndex, setDayIndex] = useState(0);
    const handleChooseDay = (dayIndex: number) => {
        setDayIndex(dayIndex)
    }

    return (
        <>
            <Row className="gap-2">
                {
                    days.map((day, index) => {
                        return (
                            <Col key={Math.random()}>
                                <Button  
                                    onClick={() => handleChooseDay(index)}
                                    className=""
                                    variant={chooseDayIndex !== index ? 'secondary' : 'success'}
                                >
                                    {day.name}
                                </Button>
                            </Col>
                        )
                    })
                }
            </Row>
            <Row>
                <ListWorkHour workHours={days[chooseDayIndex].times} />
                <AddWorkHourForm addNewHour={addNewWorkHour} dayIndex={chooseDayIndex} />
            </Row>
        </>
    )
}